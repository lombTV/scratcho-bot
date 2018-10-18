const Discord = require("discord.js");
const botconfig = require("./botconfig.json");


module.exports.run = async (client, message, args, prefix) => {
		console.log("Running help command...");
		let prefix = botconfig.prefix;
		let botMsg = "Hi!";
		botMsg += " My name's SCRATCH-O, and I'm a utility bot for private use written by lombtv!";
		botMsg += "\n``--Information--";
		botMsg += `\n${prefix}help: Shows you all available commands.`;
		botMsg += `\n${prefix}uptime: Shows how long I've been running.`;
		botMsg += `\n${prefix}botinfo: Information about the bot is stored here.`;
		botMsg += `\n${prefix}serverinfo: Information about the server is stored here.`;
		botMsg += "\n--Fun--";
		botMsg += `\n${prefix}repeat: Repeats a message you pass.`;
		botMsg += "\n``";
		return message.channel.send(botMsg);
}

module.exports.help = {
	name: "help"
}