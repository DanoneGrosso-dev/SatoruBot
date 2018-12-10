const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let muteRole = message.guild.roles.find("name", "Muted");
    let member = message.mentions.members.first();
    if(!member) return message.channel.send("Quem você quer desmutar? \n  (Para desmutar, o cargo tem que chamar `Muted`)");
     else{
     member.removeRole(muteRole);
     message.channel.send(`✅| ${member} foi desmutado por ${message.author}`);
    }
}

module.exports.help = {
  name: "unmute"
}
