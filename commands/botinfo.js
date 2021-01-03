const Discord = require('discord.js')
const db = require('quick.db')
module.exports.run = async (client, message, args) => {

let bot = message.mentions.members.first() || message.guild.members.cache.get(args[0])

if(!bot) return message.reply('Você Precisa Mencionar  Um Bot Valido!')
if(!bot.user.bot) return message.reply('Você Não Pode Verificar Um Humano!')


const embed2 = new Discord.MessageEmbed()
  .setColor('#00ffe4') 
  .setTitle(`Informações De ${bot.user.username}`)
  .setDescription(`Votos:
  \`\`\`0\`\`\`
  Entrou Em:
  \`\`\`${bot.joinedAt.toLocaleDateString("pt-BR")}\`\`\` 
  Id:
  \`\`\`${bot.user.id}\`\`\` `)

if(!db.get(`${bot.id}_votes`)) return message.channel.send(embed2)


const embed = new Discord.MessageEmbed()
  .setColor('random') 
  .setTitle(`Informações De ${bot.user.username}`)
  .setDescription(`Votos:
  \`\`\`${db.get(`${bot.id}_votes`)}\`\`\`
  Entrou Em:
  \`\`\`${bot.joinedAt.toLocaleDateString("pt-BR")}\`\`\` 
  Id:
  \`\`\`${bot.user.id}\`\`\` `)
  
  message.channel.send(embed)
}