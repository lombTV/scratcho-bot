const Discord = require("discord.js");

/* Repeats the argument passed by the user. */

module.exports.run = async (client, message, args) => {
	return message.channel.send(args.join(" "));
}

module.exports.help = {
	name: "repeat"
}