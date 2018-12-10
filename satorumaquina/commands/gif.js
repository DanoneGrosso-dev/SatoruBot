const Discord = require("discord.js");
const gifSearch = require("gif-search")

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
let pesq = args.join(" ")
gifSearch.random(pesq).then(
    gifUrl => message.channel.send({embed: {
        title: `Resultado da pesquisa de gifs: ${pesq}`,
        image: {url: gifUrl}
    }})
);

}

module.exports.help = {
  name: "gif"
}
