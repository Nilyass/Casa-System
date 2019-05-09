const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-"
const Util = require('discord.js');

client.on("message",async message => {
if(message.content === '-report'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"@everyone");
      if(!staff) return message.reply(`**Only codes | :x:**`)
var shopc = message.guild.channels.find("name","js")
  if(!shopc) return message.reply("لا اجد الروم المخصص")
    let shop = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("شنو دار لك ؟").then(e => {
           message.channel.awaitMessages(fillter, { time: 60000, max: 1   

})
     .then(co => {
       shop = co.first().content;
        co.first().delete();
             

     
let desc = '';        
e.edit("شرح علاش ؟").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc  = co.first().content;
        co.first().delete();


e.edit("تم").then(e => {
  shopc.send(`@everyone | @here

${message.guild.name}:tm: -js :arrow_down:
====================== 
               : المتكي
${shop}

======================

     6flx

======================

**المجرم:** **${desc}**

======================

**المجرم:** ${message.author}
@everyone | @here`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});


client.login("NTc2MTAyNTkxNzE3NTcyNjEw.XNRnpQ.xMrluzea97o6wqiAUoG-AsTEuAM");
