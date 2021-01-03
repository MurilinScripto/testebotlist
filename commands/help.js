const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  .setColor("00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Fire! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Botlist\n2️⃣ Moderação\n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463')
  message.channel.send({embed}).then(msg=> {
    msg.delete({ timeout: 1200000000 })
      msg.react('1️⃣').then(r=>{
      msg.react('2️⃣')
      msg.react('⬅️')
  })

  const utilfilter = (reaction, user) => reaction.emoji.name === '1️⃣' && user.id === message.author.id;
  const funfilter = (reaction, user) => reaction.emoji.name === '2️⃣' && user.id === message.author.id;
  const voltarfilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
  const util = msg.createReactionCollector(utilfilter, { time: 120000 });
  const fun = msg.createReactionCollector(funfilter, { time: 120000 });
  const voltar = msg.createReactionCollector(voltarfilter, { time: 120000 });



  util.on('collect', r1 => { 
   r1.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setThumbnail(message.author.displayAvatarURL())
          .setColor("#00ffe4")
        
          .setDescription("**⚒ |Comandos Botlist\n\n`f.addbot` `f.verificar` `f.vote` `f.votos`");
     
      msg.edit(embed);
  })

  fun.on('collect', r2 => { 
   r2.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
          .setColor("#00ffe4")
       
          .setThumbnail(message.author.displayAvatarURL())
          .setDescription(" **🎭 | Comandos de Moderação!**\n\n `f.clean` `f.setexit` `f.setexistmsg` `f.setwelcome` `f.setwelcomegif`   `f.setwelcomemsg`");
    
      msg.edit(embed);
  })


  voltar.on('collect', r3 => { 
   r3.users.remove(message.author.id)
      embed = new Discord.MessageEmbed()
   .setTitle("Painel de Comandos!")
  .setThumbnail(message.author.displayAvatarURL())
  
  .setColor("#00ffe4")
  .setDescription(`Olá, ${message.author} \n Meu nome é Fire! \n Está é minha lista de comandos!`)
  .addField('1️⃣ Botlist\n2️⃣ Moderação\n⬅️ Voltar', '\u200B', false)
  .addField('Chame Na Dm Por ajuda!✰ Star.#9537\nOu\njose_trindade1#4463')
  .setFooter('Criadores: ✰ Star.#9537\n\njose_trindade1#4463')
          
    msg.edit(embed);
  })
})
}
module.exports.help = {
    name: "ajuda",
    aliases: ['help', 'comandos', 'commands']
}