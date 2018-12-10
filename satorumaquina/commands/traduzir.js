const Discord = require("discord.js");
const translate = require('google-translate-api');


module.exports.run = async (client, message, args) => {

  let reason = args.slice(1).join(' ');
    if (reason.length < 1) return message.reply('**Diga o idioma e oque devo traduzir!**');
        translate(args.slice(2).join(' '), {to: args[1]}).then(res => {
          var bandeira = (args[1] == 'en') ? 'us' : args[1];
          const embed = new Discord.RichEmbed()
            .setAuthor('ThrionNetwork', client.user.avatarURL)
            .setColor("#36393E")
            .setTimestamp()
            .addField(`✅  **Traduzido com êxito!**`, `🌐 Idioma da tradução [:flag_${bandeira}:]`)
            .addField(`📥 **Texto enviado**`, "```\n" + args.slice(2).join(' ') + "```", true)
            .addField(`📤 **Tradução**`, "```\n" + res.text + "```", true)
            .setFooter(`Usado por: ${message.author.username}`, message.author.avatarURL)
          message.channel.send(embed)
      }).catch(err => {
        console.error(err);
        message.reply("O idioma [" + args[0] + "] parece não existir.")
    });

};

module.exports.help = {
  name: "traduzir"
}
