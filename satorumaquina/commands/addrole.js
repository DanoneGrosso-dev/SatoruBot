const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if (args[0] == "help") {
    message.reply("Use: s.addcargo <usuário> <cargo>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!rMember) return errors.cantfindUser(message.channel);
  let role = args.join(" ").slice(22);
  if (!role) return message.reply("Especifique um cargo.");
  let gRole = message.guild.roles.find(`name`, role);
  if (!gRole) return message.reply("Este cargo não está no nosso banco de dados.");

  if (rMember.roles.has(gRole.id)) return message.reply("Este usuário já tem este cargo.");
  await (rMember.addRole(gRole.id));

  try {
    await rMember.send(`Parabéns ${member.user.username}:tada:! Você recebeu o cargo **${gRole.name}**`)
  } catch (e) {
    console.log(e.stack);
    message.channel.send(`Parabéns para o/a __<@${rMember.id}>__!, ele recebeu o cargo **${gRole.name}**! :tada: (DM é fechada :/).`)
  }
}

module.exports.help = {
  name: "addcargo"
}
