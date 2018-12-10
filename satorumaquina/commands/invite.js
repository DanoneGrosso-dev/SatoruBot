const Discord = require("discord.js");

exports.run = (client, message, args) => {

    message.channel.sendMessage({
        "embed": {
          "description": "ㅤㅤㅤㅤㅤㅤㅤㅤㅤ**🌀 Saturo **ㅤㅤㅤㅤㅤㅤㅤㅤㅤ\nㅤ\n**Aqui está o link de convite para você convidar seus amigos para o servidor:**\nhttps://discord.gg/uyAY6v\nㅤ\nNo momento estamos com **" + message.guild.members.size + " membros** :smile:",
          "color": 55512,
          "timestamp": "2018-01-23T18:21:28.492Z",
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": ""
          }
        }
      });

    }
    module.exports.help = {
        name:'convidar'

    }
