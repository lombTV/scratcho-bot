const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
		console.log("Running help command...");
		let prefix = botconfig.prefix;
		let botMsg = "Hi!";
		botMsg += " My name's SCRATCH-O, and I'm a utility bot for private use written by lombtv!";
		botMsg += "\n``--Information--";
		botMsg += `\nhelp: Shows you all available commands.`;
		botMsg += `\nuptime: Shows how long I've been running.`;
		botMsg += `\nbotinfo: Information about the bot is stored here.`;
		botMsg += `\nserverinfo: Information about the server is stored here.`;
		botMsg += "\n--Fun--";
		botMsg += `\nrepeat: Repeats a message you pass.`;
		botMsg += "\n``";
		return message.channel.send(botMsg);
}

module.exports.help = {
	name: "help"
}