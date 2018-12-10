const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let aicon = bot.user.displayAvatarURL;
    let info = new Discord.RichEmbed()

    .setTitle("💉 Satoru Informações ")
    .setDescription("🖤 **+ 18**:\n\n`s.nsfw` - Comando criado para os canais de nsfw. Ele gera imagens aleátorias de pornografia.\n\n:cop:**Comandos de moderação**:\n\n`s.banl` - Pune o usuário sem ter necessáriamente as logs!\n`s.say` - Este comando faz o bot falar algo. Ex: s.say Olá!\n`s.ban` - Banir um usuário.\n`s.limpar` - limpa o chat.\n`s.addcargo` - Adiciona um cargo ao membro.\n`s.report` - Pode reportar alguém que esteja infringindo alguma regra.\n`s.delcargo` - Deleta o cargo do usuário.\n`s.emoji` - Vê todos os emojis do servidor!\n`s.anuncio` - Anúncia marcando todos.\n`s.vote` - Incia uma votacão.\n`s.icone` - Mostra o icone do servidor.\n\n🤖 **Informações do bot**:\n`s.ontime` - Ele mostra o tempo que o bot está online.\n`s.stats` - Mostrar as configs do bot e onde está hospedado.\n\n😋 **Diversão**:\n`s.corrida` - Você pode correr contra outro usuário! 🏎...\n`s.saturo` - 🗣 Você pode conversar comigo!\n`s.kiss` - Você pode beijar outra pessoa! 💑\n`s.level` - Temos um sistema de leveís! Só digitar o comando e ver seu atual nível.\n`s.meme` - Você vizualiza algum meme gerado rândomicamente.\n`s.gif` - Gera rândomicamente um gif.\n\n🎧 Música:\n\n`s.play` - Inicia a música.\n`s.stop` - Para a música.\n\nOBS: `Caso encontre algum bug/erro em qualquer comando, contate o meu desenvolvedor,` **<@324661866926309376>**.")


    .setColor(`RANDOM`)
    message.author.send(info);
    message.reply("Informações enviadas em sua **DM**! 📥")

}

module.exports.help = {
  name: "info"
}
