const Discord = require("discord.js");
const moment = require("moment")
require("moment-duration-format")


exports.run = (client, message, args) => {
    let duration = moment.duration(client.uptime).format('D [d], H [h], m [m], s [s]');
    let nomeeapelido = message.guild.member(message.author.id).nickname || message.author.username;

    message.channel.send(`😴 **${nomeeapelido}** eu estou acordado à **${duration}**!\n\nSou muito dorminhoco :stuck_out_tongue:!`);
}

module.exports.help = {
  name: "acordado"
}
