const Discord = require("discord.js");
const malScraper = require('mal-scraper');



module.exports.run = async (client, message, args) => {

var razão = args.slice(1).join(" ")

    var usuario = message.mentions.users.first();
    if(!message.guild.member(message.author.id).hasPermissions("BAN_MEMBERS")) return message.reply("Você não tem permissão de usar esse comando")
    if(message.mentions.users.size < 1) return message.reply("Você não mencinou ninguém")
    if(!message.guild.member(usuario).bannable) return message.reply("Eu não posso banir essa pessoa")
    if(razão.length < 1) return message.reply("Você não colocou uma razão")  

    message.guild.member(usuario).ban()

   var discord = require ('discord.js')

   var embed = new discord.RichEmbed()
   .setTitle("**Usario banido do server**")
   .setColor("#36393e")
   .setTimestamp()
   .addField("Staff: " , message.author.username, true)
   .addField("Usuario: " , usuario.username,true)
   .addField("ID: " , usuario.id,true)
   .setThumbnail(message.author.displayAvatarURL)
   .addField("<:1327865856:510472335627780116> Razão: " , razão, true);

   message.channel.send(embed)

}

module.exports.help = {
    name: "ban"
  }