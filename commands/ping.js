const Discord = require("discord.js");

/* Returns ping time. */

module.exports.run = async (client, message, args) => {
	let msg = "Break, cmon. ``" + ${client.pings[0]} + " ms``";
	return message.channel.send(msg);
}

module.exports.help = {
	name: "ping"
}