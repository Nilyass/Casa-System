const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "M"
const Util = require('discord.js');

client.on("message",async message => {
if(message.content === 'Mbuy'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"@everyone");
      if(!staff) return message.reply(`**Only Sellers | :x:**`)
var shopc = message.guild.channels.find("name","seller")
  if(!shopc) return message.reply("لا اجد الروم المخصص للبيع")
    let shop = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("هل تريد شراء نصخة البووت بروميوم ؟").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1   

})
     .then(co => {
       shop = co.first().content;
        co.first().delete();
             

     
let desc = '';        
e.edit(":Managerpremuim").then(e => {
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
**يريد شراء بروميوم:** **${desc}**
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


client.login("NTY1MDMyOTc5MTYwODkxNDMy.XK_8bw.7KgFQ13Q7sZ_arj5jIgXFV1DeQw");
