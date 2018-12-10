const Discord = require("discord.js");

exports.run = async (client, message, args) => { 

    try {
    const invite = await message.channel.createInvite({maxAge: 0});

    message.reply(`:incoming_envelope: **Convite Gerado:** \n ${invite} `)


} catch (err) {
    message.reply(':x: **Eu não tenho permissão para criar um convite deste servidor.**')
   }
}

module.exports.help = {
    name:'convite'

}
