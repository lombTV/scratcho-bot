const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, file) => {
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
    member.guild.channels.get('channelID').send("Welcome"); 
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;
	if (!message.content.startsWith(botconfig.prefix)) return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0]; // Command the user asked for.
	cmd = cmd.toLowerCase().substr(1);
	let args = messageArray.slice(1); // Whatever the argument is

	let commandfile = client.commands.get(cmd.slice(prefix.length));
	if (commandfile) commandfile.run(bot, message, args);

	// /* Return Uptime to User */

	// if (cmd === `uptime`) {
	// 	let totalSeconds = (client.uptime / 1000);
	// 	let hours = Math.floor(totalSeconds / 3600);
	// 	totalSeconds %= 3600;
	// 	let minutes = Math.floor(totalSeconds / 60);
	// 	let seconds = totalSeconds % 60;
	// 	let uptime = `I've been online for ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;
	// 	return message.channel.send(uptime);
	// }

	// /* Return Bot Information */
	// if (cmd === `botinfo`) {
	// 	let boticon = client.user.displayAvatarURL;
	// 	let botembed = new Discord.RichEmbed()
	// 	.setDescription("SCRATCH-O Information")
	// 	.setColor("#0000ff")
	// 	.setThumbnail(boticon)
	// 	.addField("Bot Name", client.user.username)
	// 	.addField("Source Code", "https://github.com/lombTV/scratcho-bot");

	// 	return message.channel.send(botembed);
	// }

	// /* Return Server Information */
	// if (cmd === `serverinfo`) {
	// 	let servericon = message.guild.iconURL;
	// 	let serverembed = new Discord.RichEmbed()
	// 	.setDescription("Server Information")
	// 	.setColor("#ff00ff")
	// 	.setThumbnail(servericon)
	// 	.addField("Server Name", message.guild.name)
	// 	.addField("Created On ", message.guild.createdAt)
	// 	.addField("User Joined ", message.member.joinedAt)
	// 	.addField("Members: ", message.guild.memberCount)
	// 	.addField("Owner: ", message.guild.owner);

	// 	return message.channel.send(serverembed);
	// }

	// /* Repeat after me */

	// if (cmd ===`repeat`) {
	// 	return message.channel.send(args);
	// }

});

client.login(process.env.BOT_TOKEN);
