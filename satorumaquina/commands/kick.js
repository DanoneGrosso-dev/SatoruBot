const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


var razao = args.slice(1).join(" ")
  var membro = message.mentions.members.first();
  if(!message.member.hasPermissions("KICK_MEMBERS")) return message.reply("você não tem permissão de usar esse comando")
  if(!membro) return message.reply("você não mencionou ninguém")
  if(!membro.kickable) return message.reply("Você não pode kickar essa membro")
  if(razao.length < 1) return message.reply("Coloque um motivo!")
  membro.kick()
  message.channel.send(`O membro ${membro.user.username} foi kickado do servidor.\nMotivo: ${razao}`);
  }

  module.exports.help = {
    name: "kick"
  }
