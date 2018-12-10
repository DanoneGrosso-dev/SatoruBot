const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {

  let User = message.mentions.users.first();
  if(!User) return message.reply('Usuário não encontrado!')


let msa = message.author;
let embed = new Discord.RichEmbed()
.setDescription(`${msa} beijou o ` + User + "  :heart:")
.setColor("#ff0000")
.setImage("https://cdn.discordapp.com/attachments/491316370261278741/492446463801032714/giphy.")
.setFooter(`© Satoru`, "https://cdn.discordapp.com/icons/484467547685650432/53233a731c48416da61b0eeb4a9037a0.jpg?size=2048")

message.channel.send(embed);

}

module.exports.help = {
  name: "kiss"
}
