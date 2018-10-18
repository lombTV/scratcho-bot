const Discord = require("discord.js");

/* Returns ping time. */

module.exports.run = async (client, message, args) => {
		return message.channel.send("Break, cmon. ``" + new Date().getTime() - message.createdTimestamp + " ms``");
}

module.exports.help = {
	name: "help"
}