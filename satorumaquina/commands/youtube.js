const Discord = require("discord.js");
const YouTube = require("simple-youtube-api");
const youtube = new YouTube(`AIzaSyBHcnx1NJ7Cxpnx29z1mDI6kkdLlqenQv0`);



module.exports.run = async (client, message, args) => {

  youtube.searchVideos(args, 1)
      .then(results => {

        const ytEmbed = new Discord.RichEmbed()
          .setAuthor(`Pesquisa no youtube de ${args}`.split(',').join(' '))
          .setThumbnail(results[0].thumbnails.high.url)
          .setColor('#ffc1cc') //I personally use bubblegum pink!
          .addField('Título', results[0].title, true)
          .addField('Canal', results[0].channel.title, true)
          .addField('Descricão', results[0].description)
          .addField('Link Direto', `https://youtu.be/${results[0].id}`);

          message.channel.send(ytEmbed);
      })
      .catch(console.log);

}

module.exports.help = {
  name: "youtube"
}