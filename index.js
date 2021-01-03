
const express = require('express');
const app = express();
const db = require('quick.db')
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 
const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json");

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    let command = args.shift().toLowerCase();
if(command === "votar") command = "vote"
if(command === "vota") command = "vote"
if(command === "votes") command = "votos"
if(command === "avaliar") command = "verificar"
    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
			 if (err.code == "MODULE_NOT_FOUND"){
message.channel.send(`Desculpe!Eu Não Consegui Achar Esse Comando!<a:Gato_Triste:794928649123266600>`)
return
			 }
    console.error('Erro: ' + err);
  }
});

client.on("ready", () => {
  let activities = [
    `Utilize ${config.prefix}help
       para obter ajuda`,
    `Olá!`,
    `${client.users.cache.size} usuarios`,
    `Continue sendo legal :)`,
    `Minha comida favorita é Pastel!`
  ],
    i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
  }), 200 * 40);
  client.user
    .setStatus("online")
    .catch(console.error);
  console.log("Estou Tongolinha!")
})


client.on("message", async message => {
  if (message.content.startsWith('<@!794732135260880971>') || message.content.startsWith('<@794732135260880971>')) {
    let mention = new Discord.MessageEmbed()
      .setColor('#A020F0')
      .setDescription('Oi!Meu Nome É `Fire Bot List` Mas Pode Me Chamar De Fire!Utilize f.help Por ajuda!')
      .setFooter('Meu Papi Se Chama ✰ Star.#9537')

    message.channel.send(mention);
  }
});


client.on('guildMemberAdd', member => {
  let channelID = db.get(`${member.guild.id}_channelID`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg`)
  let img = db.get(`${member.guild.id}_gif`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`Ola ${member} Seja Bem vindo(a) ${member.guild.name} agora temos ${member.guild.members.cache.size} de membros!Seja bem vindo a o ${member.guild.name}!Leia as Regras e Se divirta!`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})




client.on('guildMemberRemove', member => {
  let channelID = db.get(`${member.guild.id}_channelID_leave`)
  if (!channelID) return
  let channel = member.guild.channels.cache.get(channelID)
  if (!channel) return
  let msg = db.get(`${member.guild.id}_msg_leave`)
  let img = db.get(`${member.guild.id}_gif_leave`)
  if (!msg) {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(`O ${member.user.tag}(${member.id}) acaba de sair do servidor... sem ele a gente so tem ${member.guild.members.cache.size}  de membros`)
    if (img) embed.setImage(img)
    channel.send(embed)
  } else {
    let one = msg.replace('[guild.name]', member.guild.name)
    let two = one.replace('[member.name]', member.user.username)
    let there = two.replace('[member]', member)
    let four = there.replace('[members]', member.guild.members.cache.size)
    let five = four.replace('[member.tag]', member.user.tag)
    let six = five.replace('[member.id]', member.user.id)
    let seven = six.replace('\n', `\n`)
    msg = seven
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL())
      .setDescription(msg)
    if (img) embed.setImage(img)
    channel.send(embed)
  }
})




client.login(process.env.TOKEN); 