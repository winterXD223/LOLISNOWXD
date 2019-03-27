const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log("Estoy listo!");
});
var prefix = config.prefix;

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "hola")) {
    message.channel.send("Hola que tal?");
  }


});
client.on("guildMemberAdd", (member) => {
   var canal = client.channels.get('559943695701508120')
   canal.send(`${member.user}, bienvenido snow miembro!!.`)

});
client.login(bND5uOfqmrudc9VWPT2w4epsNAN9ivQ9);
