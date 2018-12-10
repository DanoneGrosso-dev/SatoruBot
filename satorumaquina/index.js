console.log( 'Carregando...' );
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: false});
const tempo = require('weather-js');
let xp = require("./xp.json");
bot.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Não achei o commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} carregado!`);
    bot.commands.set(props.help.name, props);
  });

});


bot.on("ready", async () => {
console.log(`${bot.user.username} está online em ${bot.guilds.size} servidores!`);

function changing_status() {
  let status = [`👥 sou amigo de ${bot.users.size} pessoas!`, `😍 Estou em ${bot.guilds.size} guilds!`, `🧐 Sabia que a minha linguagem é o Java Script?!`, `🌠 Fui desenvolvido por Latencyx#0404`]
  let random = status[Math.floor(Math.random() * status.length)]
  bot.user.setActivity(random)
}

  console.log( 'ca$h' );
  setInterval(changing_status, 10000);
})


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);


      if(message.content === 's.satoru'){

        message.delete().catch(O_o=>{});
        let msa = message.author;
        let embed = new Discord.RichEmbed()
        .setDescription(":thinking: `s.satoru`\nPergunte algo para o Satoru!\n\n :book: Exemplo: `s.satoru você me ama?`")
        .setTitle("Pergunte ao Satoru!")
        .setFooter(`Autor: ${message.author.username} - ID: ${message.author.id}`, )
        .setThumbnail("")
        .setColor("#ff6600")
        message.channel.send(embed);
      }

      

    {
        if(message.content.startsWith("s.satoru ")){

          let satoruresp =  ["`Tenho que certeza que sim!` 👍","`Não sei, siga seu coração!` ❤️","`Será?` :thinking:","`Não sei, só sei que eu sou super fofo ^^`","Não!","Que pergunta é essa moço!?","Sério isso? Que triste! 😥", "`Stupid guy!` 🤓"];
          let resultado = Math.floor((Math.random() * satoruresp.length));

          let ballembed = new Discord.RichEmbed()
          .setAuthor(`💬 Satoru responde!`)
          .setColor('#ff000')
          .addField('Resposta:', satoruresp[resultado])
          .setFooter(`${message.author.username} obrigado por falar comigo 😊`)

message.channel.send(ballembed);

if(message.content.startsWith("s.s")){
  message.guild.members.forEach(a => {
    a.user.send(mensagem)
})

}
message.channel.send(ballembed);


        }
      }

      if(message.content.startsWith("s.tempo")){
tempo.find({search: args.join(" "), degreeType: 'C'}, function(err, result){
    if (err) return message.channel.send(err);

    if (result.length === 0) {
        message.channel.send('Selecione uma cidade para pesquisar o tempo!' )
        return;
    }
        var Tempo = result[0].current;
        var Local = result[0].location;

    let embed = new Discord.RichEmbed()
        .setColor(`#38c6ff`)
        .setAuthor(`Tempo de ${Tempo.observationpoint}`)
        .setThumbnail(Tempo.imageUrl)
        .addField('Fuso horário :', `${Local.timezone} UTC`, true)
        .addField('Tipo de grau :', Local.degreetype, true)
        .addField('Temperatura :', `${Tempo.temperature} graus`, true)
        .addField('Em torno dos:', `${Tempo.feelslike} graus`, true)
        .addField('Ventos:', Tempo.winddisplay, true)
        .addField('Umidade do Ar:', `${Tempo.humidity}%`, true)
    message.channel.send(embed);
    });

  }

  bot.on("guildMemberAdd", member => {


      let xpAdd = Math.floor(Math.random() * 7) + 8;
  console.log(xpAdd);

  // if(!xp[message.author.id]){
  //   xp[message.author.id] = {
  //     xp: 0,
  //     level: 1
  //   };
  // }
  //
  //
  // let curxp = xp[message.author.id].xp;
  // let curlvl = xp[message.author.id].level;
  // let nxtLvl = xp[message.author.id].level * 300;
  // xp[message.author.id].xp =  curxp + xpAdd;
  // if(nxtLvl <= xp[message.author.id].xp){
  //   xp[message.author.id].level = curlvl + 1;
  //   let lvlup = new Discord.RichEmbed()
  //
  //   .setTitle(`__${message.author.username}__ upou de nível!`)
  //   .setColor(`#ff0000`)
  //   .addField("Novo nível", curlvl + 1);
  //
  //   message.channel.send(lvlup).then(msg => {msg.delete(50000)});
  // }
  // fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
  //   if(err) console.log(err)
  // });

  })


      if(cmd == '<@484451582268669974>'){

        let msa = message.author;
        let embed = new Discord.RichEmbed()
        .setDescription("\n\nMeu prefixo é **s.**!\nCaso tenha alguma dúvida com meus comandos é só digitar __s.info__, que todas as informacões dos comandos estão lá!\n\n😊 Se puder dar uma passadinha no meu [discord](https://discord.gg/2xqe6C4)")
        .setTitle("📌 s.ajuda")
        .setFooter(`Obrigado por entrar no ${message.guild.name}!`)
        .setThumbnail(message.guild.iconURL)
        .setColor("#ff6600")
        message.channel.send(embed);
      }
      

if(message.content.startsWith("s.pinto")){

          let satoruresp =  ["8===D","8======D","8======================D", "8=D", "8------D", "(|)"];
          let resultado = Math.floor((Math.random() * satoruresp.length));

 let ballembed = new Discord.RichEmbed()
 .setAuthor(`Pal de ${message.author.username}`)
.setColor('#ffe200')
 .addField('Tamanho:', satoruresp[resultado])

message.channel.send(ballembed);

        }
    

bot.on("ready", () => {

  let img = ["https://cdn.discordapp.com/avatars/484451582268669974/3edf19f5365445bec73d8b999a5c6e0a.png?size=2048", "https://cdn.discordapp.com/attachments/508359365468880916/508362542150844456/f9606d2199b13d7ef2775134a79fa3cbd9e71ac8_00.jpg", "https://cdn.discordapp.com/attachments/508359365468880916/508362540003229698/smol_satoru_by_honrupi-d9tlneh.jpg"];
  
    function setImg() {
        let randomImage = img[Math.floor(Math.random() * img.length)];
        bot.user.setAvatar(randomImage);
    }
  
    setImg();
    setInterval(() => setImg(), 60000000); //10000 = 30s
  });



});

bot.login(botconfig.token);
