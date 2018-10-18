const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	return message.channel.send(args);
}

module.exports.help = {
	name: "repeat"
}