const {Client, Intents} = require('discord.js')
const Discord = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const TOKEN = process.env['TOKEN']

client.on('ready', () => { console.log('Domu\'s online!');

client.on("message", (message) => {
  if(message.content == "%ping"){
    message.channel.send("Pog! (Yes that was intentional lmfao)")

  }
});

client.on("message", (message) => {
  if(message.content == "%meme"){
    message.channel.send("https://ImageGallery.heliosouzaleles.repl.co/images/kingfu.gif")

  }
});

client.login(process.env.TOKEN)});