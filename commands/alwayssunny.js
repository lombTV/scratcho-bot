const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

	let j = "\"" + args.join(" ") +"\"";
	console.log(j);
	let b = Buffer.from(j, 'binary').toString('base64');
	console.log(Buffer.from(b, 'base64').toString('binary'));
	return message.channel.send(`http://alexanderlozada.com/iasip/?${b} :ok_hand:`);
}

module.exports.help = {
	name: "alwayssunny"
}