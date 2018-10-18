const Discord = require("discord.js");

/* Returns ping time. */

module.exports.run = async (client, message, args) => {
	const m = await message.channel.send("And stop.");
    m.edit(`Scratch-o! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
}

module.exports.help = {
	name: "ping"
}