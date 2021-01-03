const Discord = require("discord.js");
const c = require('../config.json');

exports.run = (client, message, args) => {
    var infu = ('https://extremoz.rn.gov.br/wp-content/uploads/2019/10/info.png')
   let erro = new Discord.MessageEmbed()

  .setTitle(`INFORMAÇÃO`)
  .setDescription(`*Limpe o chat do seu servidor*`)
  .addField(`:hammer: **Uso**`, `\`clear <número de 2 à 100>\``, true)
  .addField(`:book: **Exemplo**`, `\`clear 100\``, true)
  .addField(`:bookmark: **Permissões:**`, `\`MANAGE_MESSAGES\``)
  .addField(`:twisted_rightwards_arrows: **Alternativas**`, `\`Nenhuma.\``)
  .setColor('#a67dff')  
  
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(` Você precisa da permissão \`MANAGE_MESSAGES\`.`);
    let clean = args.slice(0).join(" ");

    if (clean < 2 || clean > 100) return message.channel.send(erro)
    if (args.length === 0) return message.channel.send(erro)
    try {
        message.channel.bulkDelete(clean)
        let embed = new Discord.MessageEmbed()

        .setTitle(`:broom: LIMPEZA`)
        .setDescription(`Total de mensagens apagadas: **${clean}**`)
        .setColor('#0000')
        .setFooter(`Responsável: ${message.author.username}`)

        message.channel.send(embed)
    } catch(e){
        console.log(e);
    }
}

exports.help = {
    name: 'clear',
    aliases: []
}