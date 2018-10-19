const Discord = require("discord.js");

/* Returns every function the bot can use. */

module.exports.run = async (client, message, args) => {
		let botMsg = "Hi!";
		botMsg += " My name's SCRATCH-O, and I'm a utility bot for private use written by lombtv!";
		botMsg += "\n``--Information--";
		botMsg += `\nhelp: Shows you all available commands.`;
		botMsg += `\nuptime: Shows how long I've been running.`;
		botMsg += `\nbotinfo: Information about the bot is stored here.`;
		botMsg += `\nserverinfo: Information about the server is stored here.`;
		botMsg += `\nping: Pong.`;
		botMsg += "\n--Fun--";
		botMsg += `\nrepeat: Repeats a message you pass.`;
		botMsg += `\nalwayssunny: Generates an Always Sunny title card.`;
		botMsg += "\n--Settings--";
		botMsg += "\nprefix: Change the prefix this server uses.";
		botMsg += "\n``";
		return message.channel.send(botMsg);
}

module.exports.help = {
	name: "help"
}