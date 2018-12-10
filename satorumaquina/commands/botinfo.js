const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
let bicon = bot.user.displayAvatarURL;
let botembed = new Discord.RichEmbed()
.setDescription("Informacões da máquina\n\n\nVersão do **BOT**: 2.06")
.setColor("#f48341")
.setThumbnail(bicon)
.addField("📃 Nome do bot", bot.user.username)
.addField("💻 Servidores conectados agora:", bot.guilds.size)
.addField("👑 Criador:", "`__Latencyx^#6027__`")
.addField("💈 Prefixo:","`s.`")
.addField("👤 Usuários conectados agora:", bot.users.size)

return message.channel.send(botembed);

}

module.exports.help = {
  name: "botinfo"
}
