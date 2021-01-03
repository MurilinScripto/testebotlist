const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`Oi! **${message.author.username}**, você precisa da permissão \`MANAGE_CHANNELS\`.Para Verificar Um Bot`)

    let bot = message.mentions.members.first() || message.guild.members.cache.get(args[0])
		if(!bot) return message.reply('você Precisa Mencionar  Um Bot Valido!')//Me ta?
  if(!bot.user.bot) return message.reply('Você Não Pode Verificar Um Humano!')


  let erro = new Discord.MessageEmbed()
  .setTitle('Verificar')
  .setDescription('Verifique Um bot.')
  .addField(`**Uso:**`, `\`f.verificar <nome do bot> <aprovado ou reprovado> <motivo> \``, true)
  .setColor('#a67dff')

  
if(args[1] === "aprovado" ||args[1] === "reprovado"){

}else return message.reply('Na Segunda Palavra Depois Do Comando Você Só Pode Colocar **Aprovado** Ou **Reprovado**')
if (!args[0]) {
  return message.channel.send(erro)
} else if (content.length < 8) {
  return message.channel.send(erro);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "794738602847502396");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .setDescription(`Bot: \`\`\`${bot.user.username}\`\`\`

Aprovado Ou Reprovado:
\`\`\`${args[1]}\`\`\`

Motivo:
\`\`\`${args.splice(3).join(" ")}\`\`\` 

Verificador:
\`\`\`${message.author.tag}\`\`\`
`)
    .setTitle(`Verificado!`)
    .setFooter("Oi")
    .setTimestamp()
  );
  await message.channel.send(`O Bot Foi Verificado Com Sucesso!`);

  const emojis = [""];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}