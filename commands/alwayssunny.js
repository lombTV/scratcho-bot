const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	let j = "\"" + args.join(" ") +"\"";
	let b = Buffer.from(j, 'binary').toString('base64');
	return message.channel.send(`http://alexanderlozada.com/iasip/?${b} :ok_hand:`);
}

module.exports.help = {
	name: "alwayssunny"
}