const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const client = new Discord.Client({disableEveryone: true});

client.on("ready", async () => {
	console.log(`${client.user.username} is online!`);
});

client.on("message", async message => {
	if (message.author.bot) return;
	if (message.channel.type === "dm") return;

	let prefix = botconfig.prefix;
	let messageArray = message.content.split(" ");
	let cmd = messageArray[0]; // Command is whatever value comes after the prefix
	let args = messageArray.slice(1); // Whatever the argument is

	/* Repeat after me! */

	if (cmd === `${prefix}hello`) {
		return message.channel.send("Hello!");
	}

});


function sayHello() {
	return message.channel.send("Hello!");
}

client.login(process.env.BOT_TOKEN);
