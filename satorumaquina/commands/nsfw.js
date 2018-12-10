const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
     if (!message.channel.nsfw) return message.channel.send({embed: {
        title: `Pornô é somente em canais NSFW! 😈`
    }})
    superagent.get('https://nekos.life/api/v2/img/lewd')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle(`Ya boy ${message.author.username}! está procurando porn é...`)
      .setImage(response.body.url)
      .setColor(`RANDOM`)
  message.channel.send(lewdembed);
    })

    
}

module.exports.help = {
  name: "nsfw"
}
