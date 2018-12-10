const Discord = require("discord.js")

const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")

exports.run = (bot, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(bot.user.username)
            .setTitle("***Status do BOT***")
            .setColor("RANDOM")
            .addField("• Mem Usada", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("• Online à ", `${duration}`, true)
            .addField("• Usuários conectados", `${bot.users.size.toLocaleString()}`, true)
            .addField("• Servidores conectados", `${bot.guilds.size.toLocaleString()}`, true)
            .addField("• Canais ", `${bot.channels.size.toLocaleString()}`, true)
            .addField("• Discord.js", `v${version}`, true)
            .addField("• Node", `${process.version}`, true)
            .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("• CPU usada", `\`${percent.toFixed(2)}%\``, true)
            .addField("• Versão", `\`${os.arch()}\``, true)
            .addField("• Plataforma", `\`\`${os.platform()}\`\``, true)
            .addField("Latência da API", `${Math.round(bot.ping)}ms`)  
        message.channel.send(embedStats)
    });
};


exports.help = {
    name: "stats"
};