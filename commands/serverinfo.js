const Discord = require("discord.js");

/* Returns information about the server. */

module.exports.run = async (client, message, args) => {
	let servericon = message.guild.iconURL;
	let serverembed = new Discord.RichEmbed()
	.setDescription("Server Information")
	.setColor("#ff00ff")
	.setThumbnail(servericon)
	.addField("Server Name", message.guild.name)
	.addField("Created On ", message.guild.createdAt)
	.addField("User Joined ", message.member.joinedAt)
	.addField("Members: ", message.guild.memberCount)
	.addField("Owner: ", message.guild.owner);
	return message.channel.send(serverembed);
}

module.exports.help = {
	name: "serverinfo"
}