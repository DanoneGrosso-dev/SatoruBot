const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
      let avatar = member.displayAvatarURL;
      if (avatar.endsWith(".gif")) {
          avatar = `${member.displayAvatarURL}?size=2048`
      }
      message.channel.send({
          embed: {
              title: `${member.tag}`,
              description: `:frame_photo: [Link Direto](${avatar}) para o avatar do **${member.tag}**!`,
              image: {
                  url: avatar
              }
          }
      })

}

module.exports.help = {
  name: "avatar"
}
