const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
  var choice = args[0];
  if (choice == "papel" || choice == "p" || choice == "folha") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb => 66) {
      var choice2 = "pedra";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "tesoura";
    }
    if (choice2 == "tesoura") {
      var response = "Eu escolhi **tesoura** :scissors:! Eu ganhei!"
    } else if (choice2 == "papel") {
      var response = "Eu escolhi **papel** :page_facing_up:! Empatamos!"
    } else if (choice2 == "pedra"){
      var response = "Eu escolhi **pedra** :moyai:! Eu perdi!"
    }
    message.channel.send(response);
  } else if (choice == "pedra" || choice == "r") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb => 66) {
      var choice2 = "pedra";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "tesoura";
    }
    if (choice2 == "papel") {
      var response = "Eu escolhi **papel** :page_facing_up:! Eu ganhei!"
    } else if (choice2 == "pedra") {
      var response = "Eu escolhi **pedra** :moyai:! Empatamos!"
    } else if (choice2 == "tesoura"){
      var response = "Eu escolhi **tesoura** :scissors:! Eu perdi!"
    }
    message.channel.send(response);
  } else if (choice == "tesoura" || choice == "s") {
    var numb = Math.floor(Math.random() * 99);
    if (numb <= 33) {
      var choice2 = "papel";
    } else if (numb => 66) {
      var choice2 = "pedra";
    } else if (numb = 34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65){
      var choice2 = "tesoura";
    }
    if (choice2 == "pedra") {
      var response = "Eu escolhi **pedra** :page_facing_up:! Eu ganhei!"
    } else if (choice2 == "tesoura") {
      var response = "Eu escolhi **tesoura** :scissors:! Empatamos!"
    } else if (choice2 == "papel"){
      var response = "Eu escolhi **papel** :moyai:! Eu perdi!"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`Use: s.rps <pedra | papel | tesoura>`);
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rps"],
  permLevel: "User"
};
exports.help = {
	name: "rps",
	description: 'Play Rock Paper Scissors with bot'
}
