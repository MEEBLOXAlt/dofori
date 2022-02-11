
const {Client, Intents} = require('discord.js')
const Discord = require("discord.js")
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => { console.log('Dysta\'s ready!');
const mySecret = process.env['DYSTA']

// ping
client.on("message", (message) => {
  if(message.content == "%ping"){
    message.channel.send("Pog! (Yes that was intentional lmfao)")

  }
});
// KingFu.gif
client.on("message", (message) => {
  if(message.content == "%meme"){
    message.channel.send("https://ImageGallery.heliosouzaleles.repl.co/images/kingfu.gif")

  }
});
// hug
client.on("message", (message) => {
  if(message.content == "%hug"){
    message.channel.send("https://ImageGallery.heliosouzaleles.repl.co/images/hug.png")

  }
});




client.login(DYSTA)});