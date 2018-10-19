const Discord = require("discord.js");
const fs = require("fs");

/* Let server owners change the prefix of the bot. */

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Sorry, you don't have permission to use this function.");
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf-8"));

	prefixes[message.guild.id] = {
		prefixes: args[0]
	};

	fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
		if (err) console.log("Error! " + err)
	});

	let sEmbed = new Discord.RichEmbed()
	.setColor("#0f0fdd")
	.setTitle("Prefix Set!")
	.setDescription(`Set to ${args[0]}`)

	message.channel.send(sEmbed);
}

module.exports.help = {
	name: "botinfo"
}