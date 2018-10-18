const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
		let totalSeconds = (client.uptime / 1000);
		let hours = Math.floor(totalSeconds / 3600);
		totalSeconds %= 3600;
		let minutes = Math.floor(totalSeconds / 60);
		let seconds = Math.round(totalSeconds % 60);
		let uptime = `I've been online for ${hours} hours, ${minutes} minutes and ${seconds} seconds.`;
		return message.channel.send(uptime);
}

module.exports.help = {
	name: "uptime"
}