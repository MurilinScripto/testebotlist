const db = require('quick.db')
const Discord = require('discord.js')
module.exports.run = async(client,message,args)=>{
let bot = message.mentions.members.first()


if(!bot)return message.reply('Você Precisa Mencionar Um Bot Para Ver Os Votos Dele!')
if(!bot.user.bot) return message.reply('Você Precisa Mencionar Um **BOT** Para Ver Os Votos Dele!')
if(!db.get(`${bot.id}_votes`)) return message.channel.send('Esse Bot Não Tem Nenhum Voto!')

let votos = new Discord.MessageEmbed()
.setTitle('Votos!')
.setColor('#e71837')
.setFooter('Vote Com f.Vote <Bot>')
.setDescription(`O Bot ${bot} Tem ${db.get(`${bot.id}_votes`)} Votos!`)

message.channel.send(votos)
}