const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  var embed1 = new Discord.RichEmbed()
  

  .setTitle(`Escolha alguma das opcões:`)
  .setDescription(`Olá ${message.author}!\n\nTomara que esteja tendo um ótimo dia!\nMeus **comandos** são:\n\n\nMeus **comandos** são:\n\n\n📋| Volta ao menu\n👤   | Comandos para seu servidor\n👮‍| Comandos para a staff\n☕| Desenvolvedores\n🔧| Changelog\n\nCaso queira me adicionar é só clicar neste link: [Satoru Site](https://satoru.glitch.me/)`)
      .setFooter(`Satoru - Lounge`)
  
      message.author.send(embed1).then(async msg => {
      message.reply('comandos enviados no seu privado! <:150697047:510476356488790026>')
    
      await msg.react('📋')
          await msg.react('👤')
            await msg.react('👮')
              await msg.react('🔧')
                await msg.react('☕')
  
  
  const admfilterOPA = (reaction, user) => reaction.emoji.name === '👤' && user.id === message.author.id;
  const admOPA = msg.createReactionCollector(admfilterOPA, { time: 240000 })
  
  //Referente ao emoji: 👤
  
              admOPA.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setTitle(`Comandos para seu discord`)
      .setDescription('__ Prefixo:__ **s.**\n`ship`\n`laranjo`\n`convite`\n`gif`\n`avatar`\n`satoru`\n`hug`\n`acordado`\n`kiss`\n`nsfw`\n`ping`\n`corrida`\n`reverter`\n`spotify`\n`emoji`\n`level`')
      .setFooter(`Satoru - Config.`)
  
  await msg.edit(emoji1)
  });
  
  
  
  const admfilterCHANGE = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
  const admCHANGE = msg.createReactionCollector(admfilterCHANGE, { time: 240000 })
  
  //Referente ao emoji: 🔧
  
              admCHANGE.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setTitle(`🔧 Changelog`)
      .setDescription(' ⠀  ⠀ - Novos comandos adicionados no s.ajuda\n ⠀  ⠀ - Novos comandos\n\n(Qualquer sugestão envie para <@324661866926309376>)')
      .setFooter(`Satoru - ChangeLog`)
  
  await msg.edit(emoji1)
  });
  
  
  
  
  
  
  const admfilterDOWN = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id;
  const admDOWN = msg.createReactionCollector(admfilterDOWN, { time: 240000 })
  
  
  //Referente ao emoji: 👮
  
              admDOWN.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setTitle(`👮 Comandos para sua equipe:`)
      .setDescription('__Prefixo:__ **s.**\n\n`banl`\n`limpar`\n`anuncio`\n`tempmute`\n`chat on/off`\n`say`\n`addcargo/delcargo`\n`vote`\n`report`')
      .setFooter(`Satoru - Staff`)
  
  await msg.edit(emoji1)
  });
  
  const admfilterDEV = (reaction, user) => reaction.emoji.name === '☕' && user.id === message.author.id;
  const admDEV = msg.createReactionCollector(admfilterDEV, { time: 240000 })
  
  //Referente ao emoji: ☕
  
              admDEV.on('collect', async bot => {
  
  var emoji1 = new Discord.RichEmbed()
  
      .setTitle(`☕ Desenvolvedores:`)
      .setDescription('Olá! Fui desenvolvido pelo <@324661866926309376>!\nMinha lingugagem é o Java Script <:12356:507639352621269022>')
      .setFooter(`Satoru - Developer`)
  
  await msg.edit(emoji1)
  });
  
  const admfilterUM = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
  const admUM = msg.createReactionCollector(admfilterUM, { time: 240000 }); 
  
  //Referente ao emoji: 📋
  
                  admUM.on('collect', async bot => {
  
     
  var emoji2 = new Discord.RichEmbed()
  
  .setTitle(`Escolha alguma das opcões:`)
  .setDescription(`Olá ${message.author}!\n\nTomara que esteja tendo um ótimo dia!\nMeus **comandos** são:\n\n\nMeus **comandos** são:\n\n\n📋| Volta ao menu\n👤| Comandos para seu servidor\n👮‍| Comandos para a staff\n☕| Desenvolvedores\n🔧| Changelog\n\nCaso queira me adicionar é só clicar neste link: [Satoru Site](https://satoru.glitch.me/)`)
      .setFooter(`Satoru - Lounge`)
    
  await msg.edit(emoji2)
  
          })
  })

}

exports.help = {
  name: "ajuda"
}

