const Discord = require('discord.js');

module.exports.run = async (lep, message, args) => {
    let text = args.join(' ').slice(0)
    if(!text) return message.reply('<a:Loading:484434146966372352> Diga algo para eu fazer a votação');

      message.delete();

      let embed = new Discord.RichEmbed()
      .setColor("#36393f")
      .setDescription(`${text}`)
      .setTitle("📝 Votação")
      .setThumbnail(message.guild.iconURL)
      .setFooter(`Por: ${message.author.username}`, message.author.displayAvatarURL)
      .setTimestamp()

      message.channel.send(embed).then(sentEmbed => {
        sentEmbed.react("✅")
        sentEmbed.react("❌")
    })
}
    module.exports.help = {
    name:'vote'
    }