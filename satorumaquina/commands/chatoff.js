const Discord = require("discord.js");


module.exports.run = (bot, message, args) => {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) {
        return message.channel.send(`Não consegue não é mesmo?`)

        }
    var da = message.guild.roles.find("name","@everyone")
    message.channel.overwritePermissions(da, {
        SEND_MESSAGES: false

      })
      message.channel.send(`O canal ${message.channel} foi **desativado** pelo ` + message.author)

}
module.exports.help = {
    name:'chat off'

}
