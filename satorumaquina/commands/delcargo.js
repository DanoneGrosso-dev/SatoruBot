const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <usuário> <cargo>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user, yo.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Especifique um cargo!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Não conseguimos achar este `cargo` em nossso banco de dados.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Ele não tem este cargo.");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Putz!, você perdeu o cargo **${gRole.name}**. Triste :frowning:`)
  }catch(e){
    message.channel.send(`O usuároio <@${rMember.id}> perdeu o cargo ${gRole.name}! Tentamos falar com ele via dm porém está privado.`)
  }
}

module.exports.help = {
  name: "delcargo"
}
