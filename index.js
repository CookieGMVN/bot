'use strict';

/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');
const Config = require('./config.json');
const prefix = '>';

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content === 'Hi') {
    // Send "pong" to the same channel
    message.channel.send("Hello from Cookie's Son with love");
  }
  else if (message.content === 'Yo'){
  	message.channel.send("Wot?");
  }
  else if (message.content === prefix + 'help'){
  	const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("Cookie's Son Help")
	.setAuthor("Cookie's Son")
	.setDescription('This is a help message for everyone')
	.addFields(
		{ name: 'Prefix', value: '>' },
		{ name: 'Commands', value: 'Help', inline: true },
	)

message.channel.send(HelpEmbed);
  }

else if (message.content === prefix + 'clear'){
	message.channel.bulkDelete(100)
	  .then(messages => message.channel.send(`Bulk deleted ${messages.size} messages`))
	  .catch(console.error);
	  setTimeout(() => {  message.channel.bulkDelete(2); }, 3000);
}
});


// Log our bot in using the token from https://discord.com/developers/applications
client.login('NzcxNjgwNTY4Nzk0NDE1MTE0.X5vpiA.R8SJCtsHxv38lx0Bz1WvYbhP3uk');
