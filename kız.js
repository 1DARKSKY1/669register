const Discord = require("discord.js");
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');


exports.run = async (client, message, args,guild) => {
    let d = ayarlar.prefix
    let kizrolcik = ayarlar.kizrol
    let kizrol2cik = ayarlar.kizrolxx
    let kizrol3cik = ayarlar.kizrolemoji//falcoo 
    let yetkili = ayarlar.yetkili
    let kayıtsız = ayarlar.kayıtsız
    let emoji = ayarlar.emoji
    let kayıtsayı = db.fetch(`kayıtsayı_${message.author.id}`)
    let genelsohbet1 = ayarlar.genelsohbet
    let kayıtsohbet2 = ayarlar.kayıtsohbet //falcoo 

 //falcoo 
    if(message.channel.id !== (kayıtsohbet2))
  return message.channel.send(new Discord.MessageEmbed().setDescription(`Bu Komudu Sadece **<#${kayıtsohbet2}>** Adlı Kanalda Kullanabilirsin ! `))

 //falcoo 
  
  let falcoo = new Discord.MessageEmbed() //acebots 
 .setDescription(`**Bu komudu kullanabilmek için** <@&${yetkili}>  **yetkisine sahip olmalısın!**`)
 .setColor('#ff0000')
 
if (!message.member.roles.cache.get(yetkili))
  return message.channel.send(falcoo)  //falcoo 

let member = message.mentions.members.first();
  if (!member) return message.channel.send(new Discord.MessageEmbed().setColor('#ff0000').setDescription(`Kız Olarak Kaydedeceğin Kullanıcıyı Belirtmelisin! \n\n **Örnek Kullanım:** ${d}kız @kullanıcı `))


   member.roles.remove(kayıtsız)
   member.roles.remove(emoji)
   member.roles.add(kizrolcik)  //falcoo 
   member.roles.add(kizrol2cik)
   member.roles.add(kizrol3cik)
 //falcoo 
  
const falcocuk = new Discord.MessageEmbed()
  .setDescription(`<a:tac:784416946207850576> Kayıt Tamamlandı <a:tac:784416946207850576>

<a:tac:784416946207850576> ${member.user} <a:tac:784416946207850576> Üyesinden
<a:prizma:784416944731586560> Alınan Roller <@&${kayıtsız}>, <@&${emoji}> 
<a:prizma:784416944731586560> Verilen Roller <@&${kizrolcik}> ,<@&${kizrol2cik}> <@&${kizrol3cik}>.`)
  .setFooter(`Toplam Kayıt Sayın: ${kayıtsayı ? `${kayıtsayı}` : "0"}`, message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))
  .setColor('#b2fae6')
db.add(`kayıtsayı_${message.author.id}`, 1) //falcoo 
message.channel.send(falcocuk)
  
const falco = new Discord.MessageEmbed() //falcoo 
   .setDescription(`<a:tac:784416946207850576> ${member.user} <a:tac:784416946207850576> Adlı Üye Aramıza Katıldı. Aramıza Hoşgeldin :) `)  .setColor('#ef61f7')
   client.channels.cache.get(genelsohbet1).send(falco)};
 //falcoo 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['k'],
permLevel: 0 //falcoo 
};
exports.help = {
name: "kız",
description: "Kız Kayıt",
usage: "prefixkız"
};