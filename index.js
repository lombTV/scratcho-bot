const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
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
	if (member.user.username.includes("discord.gg") {
		member.ban("Username contained a Discord Invite link.");
	}
    member.guild.channels.get('channelID').send("Welcome, " + member.user.username + "!"); 
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if (!message.content.startsWith(botconfig.prefix)) return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0];
	let args = messageArray.slice(1); // Whatever the argument is

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(client, message, args);

});

client.login(process.env.BOT_TOKEN);
