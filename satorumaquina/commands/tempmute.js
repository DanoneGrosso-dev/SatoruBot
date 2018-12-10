const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sem permissão.");
    if (args[0] == "help") {
        message.reply("Use: !tempmute <usuário> <1s/m/h/d>");
        return;
    }
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Mencione o usuário.");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Eu não posso silenciar ele!");
    let reason = args.slice(2).join(" ");
    if (!reason) return message.reply("Por favor, indique um motivo!");

    let muterole = message.guild.roles.find(`name`, "Mutado");
    //start of create role
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Mutado",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    let mutetime = args[1];
    if (!mutetime) return message.reply("Por favor, especifique um tempo.");

    message.delete().catch(O_o => {});

    try {
        await tomute.send(`Oi! você foi mutado por ${mutetime}. Desculpe!`)
    } catch (e) {
        message.channel.send(`Um usuário sofreu uma mutação, mas seu PV estão bloqueado, ele sofreu uma mutação por ${mutetime}!`)
    }

    let muteembed = new Discord.RichEmbed()
        .setDescription(`Mutado por ${message.author}`)
        .setColor("RANDOM")
        .addField("Mutado por :", tomute)
        .addField("Canal", message.channel)
        .addField("Horário", message.createdAt)
        .addField("Tempo", mutetime)
        .addField("Motivo", reason);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if (!incidentschannel) return message.reply("Crie o canal `logs`!");
    incidentschannel.send(muteembed);
    message.channel.send(`<@${tomute.id}> foi mutado por ${mutetime}`)
    await (tomute.addRole(muterole.id));

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> foi desmutado!`);
    }, ms(mutetime));

}

module.exports.help = {
  name: "tempmute"
}
