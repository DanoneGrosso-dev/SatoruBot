const Discord = require('discord.js');

module.exports.run = async (client, message, args1) => {

    var user = message.mentions.users.first() || message.author;

    if (user.presence.game.name === 'Spotify' && user.presence.game.type === 2) {
        try {
            var trackImg = user.presence.game.assets.largeImageURL;
            var trackUrl = `https://open.spotify.com/track/${user.presence.game.syncID}`;
            var trackName = user.presence.game.details;
            var trackAlbum = user.presence.game.assets.largeText;
            var trackAuthor = user.presence.game.state;

            const embed = new Discord.RichEmbed()
                .setAuthor('Informacões da música')
                .setColor('FF0000')
                .setThumbnail(trackImg)
                .setDescription(`
\`🎵\` **Música :**  \`${trackName}\`
\`📀\` **Albúm :**  \`${trackAlbum}\`
\`🎤\` **Autor(es) :**  \`${trackAuthor}\`
`)
                .addField('Escutando:', `[${trackUrl}](${trackUrl})`, false);

            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(`\`[ERROR ❌]\`, ${user.username} não está escutando um som registrado.`);
        }

    } else {
        return message.channel.send(`${user.username} não está escutando spotify!`);
    }


}

module.exports.help = {
  name: "spotify"
}
