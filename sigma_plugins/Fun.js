//══════════════════════════════════════════════════════════════════════════════════════════════════════// 
//                                                                                                      //
//                                   MULTI-DEVICE WHATSAPP BOT                                          //
//                                                                                                      //
//                                            𝚅.𝟷.𝟻.𝟹                                                  // 
//                                                                                                      //
//              ███████╗██╗ ██████╗ ███╗   ███╗ █████╗     ███╗   ███╗██████╗                           //
//              ██╔════╝██║██╔════╝ ████╗ ████║██╔══██╗    ████╗ ████║██╔══██╗                          //
//              ███████╗██║██║  ███╗██╔████╔██║███████║    ██╔████╔██║██║  ██║                          //
//              ╚════██║██║██║   ██║██║╚██╔╝██║██╔══██║    ██║╚██╔╝██║██║  ██║                          //
//              ███████║██║╚██████╔╝██║ ╚═╝ ██║██║  ██║    ██║ ╚═╝ ██║██████╔╝                          //
//              ╚══════╝╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚═════╝                           //
//                                                                                                      //
//                                          BY:MAHER-ZUBAIR                                             //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

/**

* @project_name : SIGMA-MD
* @Developer : Maher-Zubair
* @Version : v.1.5.3
* @license : Apache-2.0

This Project Is Under Apache-2.0 License.
So, No One Have Permission To Copy This Project,
Reupload, Reversed Engineering And Any Kind Of Deobfuscation.
Otherwise, A Legal Github Copyright Action Will Be Taken Against You
Which Result In Removing The Copied Project And Permanantly Banning Of Your Account.
* @Copyright_owner : Maher-Zubair

**/

const { dare, truth, random_question ,name,tlang,prefix } = require('../lib/truth-dare.js')
const axios = require('axios')
const { Module_Exports,sleep,Function } = require('../lib')
const fetch = require('node-fetch');
let api = `${maher_api}misc/` // Check Setting.js to to get the maher_api key 

// You Can Copy All These Commands With CopyRight Act
// Don't Forgot To Give Credit And Star To My Repo

//---------------------------------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "truth",
            infocmd: "truth and dare(truth game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${truth()}`);
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "dare",
            infocmd: "truth and dare(dare game.).",
            kingclass: "game",
            kingpath: __filename,
        },
        async(Void, citel, text) => {
            return await citel.reply(`${dare()}`);
        }
    )
//--------------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 

const response = await  fetch(`${api}joke`);
  const joke= await response.json();
   const { setup, punchline } = joke.result;
citel.reply( `*𝙹𝙾𝙺𝙴:* ${setup}\n*𝙿𝚄𝙽𝙲𝙷𝙻𝙸𝙽𝙴:*  ${punchline}`);

})
//---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "joke2",
            infocmd: "Sends Joke in chat.",
            kingclass: "fun",
            kingpath: __filename,
        },
        async(Void, citel, text) => { 
 
         fetch('https://v2.jokeapi.dev/joke/Any?type=single')
         .then(response => response.json())
         .then(data => {
         citel.reply(`*𝙹𝙾𝙺𝙴:* ${data.joke}`); 
  })
  .catch(error => {
     return citel.reply ('Error fetching joke:' + error);
  });
        }
    )


//---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "fact",
        infocmd: "Sends fact in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        const res = await axios.get(`${api}fact`)
      const fact =  res.data.result.fact
        return citel.reply(`*𝙵𝙰𝙲𝚃:* ${fact}`)   
    }

)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "quotes",
        infocmd: "Sends quotes in chat.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, man, text) => {
        var quoo = await axios.get(`${api}quote`)
        const replyf = `
┏━━⟪⟪ ${mztit} ⟫━⦿
┃✗ *•𝙲𝙾𝙽𝚃𝙴𝙽𝚃•* ${quoo.data.result.body}
┃✗ *•𝙰𝚄𝚃𝙷𝙾𝚁•* ${quoo.data.result.author}  
┗━━━━━━━━━━⦿ `
return man.reply(replyf)
    }
 
)
    //---------------------------------------------------------------------------
    Module_Exports({
        kingcmd: "define",
        infocmd: "urban dictionary.",
        kingclass: "fun",
        kingpath: __filename,
    },
    async(Void, citel, text) => {
        try{
            let { data } = await axios.get(`http://api.urbandictionary.com/v0/define?term=${text}`)
            var textt = `
            *𝚆𝙾𝚁𝙳:* ${text}
            *𝙳𝙴𝙵𝙸𝙽𝙸𝚃𝙸𝙾𝙽:* ${data.list[0].definition.replace(/\[/g, "").replace(/\]/g, "")}
            *𝙴𝚇𝙰𝙼𝙿𝙻𝙴:* ${data.list[0].example.replace(/\[/g, "").replace(/\]/g, "")}`
            return citel.reply(textt)
                    } catch {
                        return citel.reply(`No result for ${text}`)
                    }
    }
)
//------------------------------------------------------------------------
Module_Exports({

            kingcmd: "hack",
            kingclass: "fun",
            infocmd: "hacking prank",
            kingpath: __filename,

        },

        async(Void,citel, text) => {
const {key} = await Void.sendMessage(citel.chat,{text:"```Injecting malware```"},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n 0%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ 10%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ 20%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ 30%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ 40%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ 50%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ 60%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ 70%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ 80%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ █ 90%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Injecting malware \n █ █ █ █ █ █ █ █ █ █ 100%```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```System hijacking on process.. \n Connecting to Server error to find 404 ```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Device successfully connected... \n Reciving data...```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"```Data hijacked from device 100% completed \n killing all evidence killing all malwares...```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"``` HACKING COMPLETED ```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"``` SENDING LOG DOCUMENTS...```",edit:key},{quoted:citel})
await sleep(1000)
          await Void.sendMessage(citel.chat,{text:"``` SUCCESSFULLY SENT DATA AND Connection disconnected```",edit:key},{quoted:citel})
await sleep(1000)
        return  await Void.sendMessage(citel.chat,{text:"*BACKLOGS CLEARED*",edit:key},{quoted:citel})

        }

    )
//---------------------------------------------------------------------------------------------------------
Function({
    kingcmd: "teddy",
    fromMe: true, 
    infocmd: "send Teddy To Your Love",
  kingpath: __filename,
    kingclass: "fun"

},
async(sigma, man)=>{
let emo =  ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '❣️', '💖', '💘', '❤️', '💟', '🤍', '💓', '😍', '😘', '💚', '❤️'];
const {key} = await man.reply("*_This IS FOr YOu_*")

  for (const emoji of emo) {

 await new Promise(res => setTimeout(res,1000));

  let x = ""
 let teddy = `
*(\\_/)*
*( •.•)*
*/>*🤍`; 

teddy = teddy.replace("🤍", emoji)
  x = x + teddy;

   await sigma.sendMessage(man.chat, {text: x, edit: key})
  }
})
//---------------------------------------------------------------------------------------------------------
Function({
  kingcmd:"lines",
  kingclass:"fun",
  kingpath: __filename,
  infocmd:"get random lines"
},async(con,m,text) => {
  try {
    let res = await fetch(`${api}lines`);
    if (!res.ok) {
      throw new Error(`_API request failed with status ${res.status}_`);
    }
    let data = await res.json();
    let line = `_${data.result}_`
    let users = m.mentionedJid ? m.mentionedJid[0] : m.msg.contextInfo.participant || false;
    if(users){
    let cap = `_@${m.sender.split("@")[0]} Throwed *Lines* On @${users.split("@")[0]}_`;
      con.sendMessage(m.chat, { text: line + `\n\n` + cap, mentions: [users, m.sender]}, { quoted: m });
    } else {
      let cap = `_@${m.sender.split("@")[0]} Throwed *Lines* At Everyone_`
      con.sendMessage(m.chat, { text: line + `\n\n` + cap, mentions: [users, m.sender]}, { quoted: m });
    }
    }catch(e){ m.sent(`_${e}_`)
    console.log(e)}
  }
)
//---------------------------------------------------------------------------------------------------------
Function({
  kingcmd:"flirt",
  kingclass:"fun",
  kingpath: __filename,
  infocmd:"Flirt With Someone"
},async(con,m,text) => {
  try{
    let res = await fetch(`${api}flirt`)
        let data = await res.json()
   let sigma = `${data.result}`
  let users = m.mentionedJid ? m.mentionedJid[0] : m.msg.contextInfo.participant || false;
  if(users){
  let cap = `_@${m.sender.split("@")[0]} *Flirted* With @${users.split("@")[0]}_`;
    con.sendMessage(m.chat, { text: sigma + `\n\n` + cap, mentions: [users, m.sender]}, { quoted: m });
  } else {
    let cap = `_@${m.sender.split("@")[0]} *Flirted* With Everyone_`
    con.sendMessage(m.chat, { text: sigma + `\n\n` + cap, mentions: [users, m.sender]}, { quoted: m });
  }
  }catch(e){m.sent(`_${e}_`)
    console.log(e)}

  }
)
//---------------------------------------------------------------------------------------------------------
Function({
  kingcmd:"poetry",
  kingclass:"fun",
  kingpath: __filename,
  infocmd:"Get Random Poetry"
},async(con,m,text) => {
      let shizokeys = 'shizo'	
  let res = await fetch(`https://shizoapi.onrender.com/api/texts/shayari?apikey=${shizokeys}`)
    if (!res.ok) throw await res.text()
        let json = await res.json()

    let sigma = `_${json.result}_`
    con.sendMessage(m.chat, { text: sigma, mentions: [m.sender] }, { quoted: m })
  }
)
//---------------------------------------------------------------------------------------------------------
Function({
  kingcmd: 'insult',
  infocmd: 'insult someone',
  kingpath: __filename,
  kingclass: "fun",
},
async (con, m) => {
  try {
    let response = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    let data = response.data;

    if (!data || !data.insult) {
      return m.reply('Unable To Insult');
    }

    let insult = data.insult;
    let users = m.mentionedJid ? m.mentionedJid[0] : m.msg.contextInfo.participant || false;
    if(users){
    let cap = `_@${m.sender.split("@")[0]} *Insulted* @${users.split("@")[0]}_`;
      con.sendMessage(m.chat, { text: cap + `\n\n` + `_${insult}_`, mentions: [users, m.sender]}, { quoted: m });
    } else {
      let cap = `_@${m.sender.split("@")[0]} *Insulted* Everyone_`
      con.sendMessage(m.chat, { text: cap + `\n\n` + `_${insult}_`, mentions: [users, m.sender]}, { quoted: m });
    }
    }catch(e){ m.sent(`_${e}_`)
    console.log(e)}
});
