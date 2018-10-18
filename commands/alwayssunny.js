const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	let b = new Buffer(args);
	let s = b.toString('base64');
	return message.channel.send(`http://alexanderlozada.com/iasip/${s} :ok_hand:`);
}

module.exports.help = {
	name: "alwayssunny"
}