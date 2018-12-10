const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete()
      const embed = new Discord.RichEmbed()

      .setTitle('**       🔧 Modificações no Satoru          **')
      .setDescription(sayMessage)
      .setFooter(`Satoru - Modificações`)
      .setTimestamp(new Date())
      .setColor('RANDOM')
      .setThumbnail(message.guild.iconURL);


      message.channel.send(embed);

      }



module.exports.help = {
  name: "editlatency"
}
