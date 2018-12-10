const Discord = require("discord.js");


module.exports.run = (bot, message, args) => {

  message.channel.send({
          "embed": {
            "description": "ㅤㅤㅤ:snowflake: **PING:** :snowflake:ㅤㅤ\n\n📡" + (Date.now() - message.createdTimestamp) + "ms",
            "color": 55512,
            "thumbnail": {
              "url": ""
            }
          }
        });

}


module.exports.help = {
  name: "ping"
}
