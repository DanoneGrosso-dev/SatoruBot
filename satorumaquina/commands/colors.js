module.exports.run = async (client, message, args) => {

  let colors = message.guild.roles.filter(role => role.name.startsWith("#"));
  if(colors.size < 1) return message.channel.send("Não tem cores neste servidor!");

  let str = args.join(" ");
  let role = colors.find(role => role.name.toLowerCase() === str.toLowerCase());

  if(!role) return message.channel.send("Está cor não existe!");

  try {

  } catch(e) {

  }

}
module.exports.help = {
name: "cor"
}
