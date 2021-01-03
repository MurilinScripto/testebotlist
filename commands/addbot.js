const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();


if(message.channel.id !== '794741422057062400') return message.channel.send('O Comando Só Pode Ser Utilizado em <#794741422057062400>')

  let erro = new Discord.MessageEmbed()
  .setTitle('Addbot')
  .setDescription('Adicione Seu Bot No Servidor!')
  .addField(`**Uso:**`, `\`f.addbot <id> <prefix>\``, true)
  .setColor('#a67dff')

if (!args[0]) {
  return message.channel.send(erro)
} else if (args[0].length < 17) {
  return message.channel.send('Eu Não Sei Oque É Isso Ai,Mas Sei Que Essa Coisa ai Não é um Id !');
  } else if (args[0].length > 19) {
  return message.channel.send('Eu Não Sei Oque É Isso Ai,Mas Sei Que Essa Coisa ai Não é um Id!');
  } else if (args[1].length > 7) {
  return message.channel.send('O Prefix Só Pode Ter 7 Caracteres!');
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "794734945871986718");
  const msg = await canal.send('<@&794746117770051634>',new Discord.MessageEmbed()
    .setColor("#FFFFF1")
    .setTitle(`Alguem Adicionou Um Bot!`)
    .setDescription(`id Do Bot:
\`\`\`${args[0]}\`\`\`
Prefix Do Bot:
\`\`\`${args[1]}\`\`\`
Quem mandou:
\`\`\`${message.author.tag}\`\`\`
[Adicione Aqui](https://discord.com/oauth2/authorize?=&client_id=${args[0]}&scope=bot&permissions=8)`) 
    .setFooter("Use f.addbot <id> <prefix> pra adicionar um bot!!")
    .setTimestamp()
  );
  await message.channel.send(`${message.author} o bot foi enviado com sucesso!`);

  const emojis = [""];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}