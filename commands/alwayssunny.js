const Discord = require("discord.js");

/* Module that generates an Always Sunny title based on an argument. */

module.exports.run = async (client, message, args) => {
	let j = "\"" + args.join(" ") +"\"";
	let b = Buffer.from(j, 'binary').toString('base64');
	return message.channel.send(`https://alwayssunnygenerator.netlify.com/?${b} :ok_hand:`);
}

module.exports.help = {
	name: "alwayssunny"
}
