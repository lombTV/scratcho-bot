const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const mysql = require('mysql');
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
	/* Gets each .js file found in the commands folder and makes them a command in the bot. */
	if (err) console.log(err);

	let jsfile = files.filter(f => f.split(".").pop() === "js")
	if (jsfile.length <= 0) {
		console.log("Could not find command files.");
		return;
	}

	jsfile.forEach((f, i) => {
		let props = require(`./commands/${f}`);
		console.log(`${f} was loaded successfully.`);
		client.commands.set(props.help.name, props);
	});

});

client.on("ready", async () => {
	console.log(`${client.user.username} is online!`);
	client.user.setActivity('Try >help!');
});

client.on('guildMemberAdd', member => {
	console.log("New Member Joined: " + member.user.username);
	const channel = member.guild.channels.find(c => c.name == "general");
	if (member.user.username.includes("discord") && member.user.username.includes("gg")) {
		member.ban("Username contained a Discord Invite link.");
		console.log("Member " + member.user.username + " with Discord Invite Link for a name has been banned.");
		return channel.send("Warning: User with a Discord Invite Link in their name has been banned.\nUser ID: " + member.user.id);
	} else {
		return channel.send("Welcome, " + member.user.username + "!");
	}
	
});

client.on('guildMemberRemove', member => {
	console.log("Member Left: " + member.user.username);
	const channel = member.guild.channels.find(c => c.name == "general");
	if (member.user.username.includes("discord") && member.user.username.includes("gg")) {
		return;
	} else {
		return channel.send(member.user.username + " has left the server. Goodbye!");
	}
});



client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if (!message.content.startsWith(botconfig.prefix)) return;

	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf-8"));
	// If the server doesn't have a prefix set, use default.
	if(!prefixes[message.guild.id]) {
		prefixes[message.guild.id] = {
			prefixes: botconfig.prefix
		};
	}

	let prefix = prefixes[message.guild.id].prefixes;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1); // Whatever the argument is

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client, message, args);

});

client.login(process.env.BOT_TOKEN);