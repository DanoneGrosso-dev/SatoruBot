const Discord = require("discord.js");
const malScraper = require('mal-scraper');



module.exports.run = async (client, message, args) => {

  const search = `${args}`;

  malScraper.getInfoFromName(search)
    .then((data) => {
    const malEmbed = new Discord.RichEmbed()
    
      .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
      .setThumbnail(data.picture)
      .setColor('#ffc1cc') //I personally use bubblegum pink!
      .addField('Título em portugês:', data.englishTitle, true)
      .addField('Título em japones:', data.japaneseTitle, true)
      .addField('Tipo:', data.type, true)
      .addField('Episódios:', data.episodes, true)
      .addField('Avaliação:', data.rating, true)
      .addField('Lançado em:', data.aired, true)
      .addField('Pontos do anime.', data.score, true)
      .addField('Assistido por:', data.scoreStats, true)
      .addField('Link', data.url);

      message.channel.send(malEmbed);

      //console.log(data);
    })
    .catch((err) => console.log(err));




}

module.exports.help = {
  name: "anime"
}