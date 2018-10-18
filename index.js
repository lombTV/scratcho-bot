const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const client = new Discord.Client({disableEveryone: true});

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
	let cmd = messageArray[0].shift().toLowerCase(); // Command is whatever value comes after the prefix
	let args = messageArray.slice(1); // Whatever the argument is

	/* Help Function */

	if (cmd === `help`) {
		var botMsg = "Hi!";
		botMsg += " I'm SCRATCH-O, a super special utility bot for private use written by lombtv!";
		botMsg += "\n``--Misc.--";
		botMsg += `\n${prefix}repeat: Repeats a message you pass.`;
		botMsg += `\n${prefix}help: Shows you all available commands.`;
		botMsg += `\n${prefix}uptime: Shows how long I've been running.`;
		botMsg += "\n``";
		return message.channel.send(botMsg);
	}

	/* Return Uptime to User */

	if (cmd === `uptime`) {
		let totalSeconds = (client.uptime / 1000);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = totalSeconds % 60;
		let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		return message.channel.send(uptime);
	}

	if (cmd ===`repeat`) {
		if (args) {
			return message.channel.send("No message was given! Try ``repeat [your_message]``.");
		} else {
			return message.channel.send(args);
		}
		
	}

});

client.login(process.env.BOT_TOKEN);
