const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args, guild) => {//falcoo
    
    let d = ayarlar.prefix
    let erkekrolcuk = ayarlar.erkekrol
    let erkekrolcuk2 = ayarlar.erkekrolxy
    let erkekrolcuk3 = ayarlar.erkekrolemoji
    let yetkili = ayarlar.yetkili
    let sahip = ayarlar.sahip
    let kayıtsız = ayarlar.kayıtsız
    let emoji = ayarlar.emoji
    let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
    let genelsohbet1 = ayarlar.genelsohbet
    let kayıtsohbet2 = ayarlar.kayıtsohbet

    if(message.channel.id !== (kayıtsohbet2))//falcoo
  return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Komudu Sadece **<#${kayıtsohbet2}>** Adlı Kanalda Kullanabilirsin ! `)).setColor('#ff0000')



  
  let falcoo = new Discord.MessageEmbed()
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`).setColor('#ff0000')
 if (!message.member.roles.cache.get(yetkili)&message.member.roles.cache.get(sahip) ) return message.channel.send(falcoo) //falcoo  
//falcoo
let member = message.mentions.members.first();
  if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setDescription(`Erkek Olarak Kaydedeceğin Kullanıcıyı Belirtmelisin! \n\n **Örnek Kullanım:** ${d}erkek @kullanıcı `))


   member.roles.remove(kayıtsız)
   member.roles.remove(emoji)
   member.roles.add(erkekrolcuk) //falcoo 
   member.roles.add(erkekrolcuk2)
   member.roles.add(erkekrolcuk3)

//falcoo
  //falcoo
const falcocuk = new Discord.MessageEmbed()
  .setDescription(`<a:tac:784416946207850576> Kayıt Tamamlandı <a:tac:784416946207850576>

<a:tac:784416946207850576> ${member.user} <a:tac:784416946207850576> Üyesinden
<a:prizma:784416944731586560> Alınan Roller <@&${kayıtsız}>, <@&${emoji}> 
<a:prizma:784416944731586560> Verilen Roller <@&${erkekrolcuk}> ,<@&${erkekrolcuk2}> <@&${erkekrolcuk3}>.`)
  .setFooter(`Toplam Kayıt Sayın: ${kayıtsayı ? `${kayıtsayı}` : "0"}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setColor('#b2fae6')
db.add(`kayıtsayı_${message.author.id}`, 1) //falcoo 
message.channel.send(falcocuk)
  //falcoo
const falco = new Discord.MessageEmbed()
   .setDescription(`<a:tac:784416946207850576> ${member.user} <a:tac:784416946207850576> Adlı Üye Aramıza Katıldı. Aramıza Hoşgeldin :)`).setColor('#0e3bfa')
   client.channels.cache.get(genelsohbet1).send(falco)}; //falcoo 
//falcoo
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['e'],
permLevel: 0
};
exports.help = {
name: "erkek",
description: "Erkek Kayıt", //falcoo 
usage: "prefix!erkek"
};