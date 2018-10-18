const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
	let b = new Buffer("\"" + args +"\"");
	let s = btoa("\"" + args +"\"");
	return message.channel.send(`http://alexanderlozada.com/iasip/?${s} :ok_hand:`);
}

module.exports.help = {
	name: "alwayssunny"
}