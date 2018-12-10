const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {

  let User = message.mentions.users.first();
  if(!User) return message.reply('Usuário não encontrado!')

  message.delete();
  
let msa = message.author;
let embed = new Discord.RichEmbed()
.setDescription(`${msa} abraçou o ` + User + " <a:HugP:484456547749986315> ")
.setColor("#ff0000")
.setImage("https://media.giphy.com/media/42YlR8u9gV5Cw/giphy.gif")
.setFooter(`© Satoru`, "https://cdn.discordapp.com/icons/484467547685650432/53233a731c48416da61b0eeb4a9037a0.jpg?size=2048")

message.channel.send(embed);

}

module.exports.help = {
  name: "hug"
}
