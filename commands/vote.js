const db = require('quick.db')
const ms = require('parse-ms')
module.exports.run = async(client,message,args)=>{
let bot = message.mentions.members.first()
if(!bot) return message.reply('Você Precisa Mencionar Um Bot Para Votar!')
if(!bot.user.bot) return message.reply('Você Precisa Mencionar Um **BOT** Para Funcionar!')
if(bot.id === "794732135260880971") return message.reply('Eu Sou O Dono Daqui...Você Não Pode Votar Em Mim!')
	          let user = message.author;
        let timeout = 43200000;
        let author = db.get(`${message.author.id}_${message.guild.id}_votado?_${bot.id}`)
                if(author !== null && timeout - (Date.now() - author) > 0){
            let time = ms(timeout - (Date.now() - author));
            return message.channel.send(`Você Não Pode Votar Nesse Bot Por ${time.hours}:${time.minutes}:${time.seconds}`)
        }else{
					message.channel.send(`Votado No ${bot} Com Sucesso!`)
					if(!db.get(`${bot.id}_votes`)){
db.set(`${bot.id}_votes`,1)
					}else{
						db.add(`${bot.id}_votes`,1)
					}
db.set(`${message.author.id}_${message.guild.id}_votado?_${bot.id}`,Date.now())
				}

}
/*
fiquei sem ideias de como fazer o cmd fica bem simples :v





*/