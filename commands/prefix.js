const Discord = require("discord.js");
const fs = require("fs");
const mysql = require('mysql');


/* Let server owners change the prefix of the bot. */

module.exports.run = async (client, message, args) => {
	if (!message.member.hasPermission("MANAGE_SERVER")) return message.reply("Sorry, you don't have permission to use this function.");

	
	var con = mysql.createConnection({
	  host: process.env.MYSQL_HOST,
	  user: process.env.MYSQL_USER,
	  password: process.env.MYSQL_PASS
	});

	console.log(process.env.MYSQL_HOST + " is my host.");

	con.connect(function(err) {
	  if (err) console.log(err);
	  console.log("Connected!");
	});

	let sEmbed = new Discord.RichEmbed()
	.setColor("#0f0fdd")
	.setTitle("Prefix Set!")
	.setDescription(`Set to ${args[0]}`)

	return message.channel.send(sEmbed);
}

module.exports.help = {
	name: "prefix"
}