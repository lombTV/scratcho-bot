const Discord = require("discord.js");
const fd = require("fs");

/* Let server owners change the prefix of the bot. */

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Sorry, you don't have permission to use this function.");
	if (!args[0] || args[0 == "help"]) return message.reply("Usage: ``>prefix <new_prefix>``");
}

module.exports.help = {
	name: "botinfo"
}