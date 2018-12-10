const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`Não consegue não é mesmo?`)

        }
    var da = message.guild.roles.find("name","@everyone")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: true

      })
      message.channel.send(`O canal ${message.channel} foi **ativado** pelo ` + message.author)

}
module.exports.help = {
    name:'chat on'
}
