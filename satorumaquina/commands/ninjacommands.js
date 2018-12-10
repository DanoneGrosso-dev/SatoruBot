const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
      let avatar = member.displayAvatarURL;
      if (avatar.endsWith(".gif")) {
          avatar = `${member.displayAvatarURL}?size=2048`
      }
      message.channel.send({
          embed: {
              title: `Ninja foda 6 é fraco`,
              image: {
                  url: "https://cdn.discordapp.com/attachments/508696689708630057/510191579873411110/d5f069c02fb451a0f3a740f05b6b15d51.png"
              }
          }
      })

}

module.exports.help = {
  name: "ninja"
}
