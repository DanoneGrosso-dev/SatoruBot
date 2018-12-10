const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let simg = `${message.guild.iconURL}?size=2048`
          let icone = new Discord.RichEmbed()
          .setDescription("Ícone do grupo:")
          .setImage(simg)
          message.channel.send(icone)


}

module.exports.help = {
  name: "icone"
}
