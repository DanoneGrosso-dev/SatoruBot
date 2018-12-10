const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Não.");
  if(!args[0]) return message.channel.send("Use: s.limpar `1 à 100`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`<a:sucess:491275371208245248> | Limpado **${args[0]}** mensagens por **${message.author}**.`).then(msg => msg.delete(200000));
});

}

module.exports.help = {
  name: "limpar"
}
