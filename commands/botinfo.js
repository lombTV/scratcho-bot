const Discord = require("discord.js");

/* Returns information about the bot. */

module.exports.run = async (client, message, args) => {
	let boticon = client.user.displayAvatarURL;
	let botembed = new Discord.RichEmbed()
	.setDescription("SCRATCH-O Information")
	.setColor("#0000ff")
	.setThumbnail(boticon)
	.addField("Bot Name", client.user.username)
	.addField("Source Code", "https://github.com/lombTV/scratcho-bot");
	return message.channel.send(botembed);
}

module.exports.help = {
	name: "botinfo"
}