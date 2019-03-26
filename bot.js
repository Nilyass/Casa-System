const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "$"
const Util = require('discord.js');

client.on("message",async message => {
if(message.content === '$buy'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"seller");
      if(!staff) return message.reply(`**Only Sellers | :x:**`)
var shopc = message.guild.channels.find("name","seller")
  if(!shopc) return message.reply("لا اجد الروم المخصص للبيع")
    let shop = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("اكتب الاشياء الذي سوف تشتريها").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1   

})
     .then(co => {
       shop = co.first().content;
        co.first().delete();
             

     
let desc = '';        
e.edit("كم سعرك؟").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc  = co.first().content;
        co.first().delete();


e.edit("Done").then(e => {
  shopc.send(`@everyone | @here
${message.guild.name}:tm: Shop :arrow_down:
======================
${shop}
======================
** الدفع ب كريديت برو بوت فقط **
======================
**السعر المشتري:** **${desc}**
======================

**تم الارسال بواسطة:** ${message.author}
@everyone | @here`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});


client.login("NTYwMTA0MTM4NDExNzM3MTIz.D3vV-Q.gFxa3vgw3K-NDDg6hJoVgLaH7Wg");
