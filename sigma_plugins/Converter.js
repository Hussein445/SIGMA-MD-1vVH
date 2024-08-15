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

const axios = require('axios')
const { sck1, tiny, fancytext,getBuffer, listall,Module_Exports , TelegraPh , name,prefix} = require('../lib')
const fs = require('fs-extra');
const util = require('util');
const { exec } = require('child_process')
const PastebinAPI = require("pastebin-js");
pastebin = new PastebinAPI("EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "photo",
            infocmd: "Makes photo of replied sticker.",
            kingclass: "converter",
            use: 'reply to any gif/sticker',
            kingpath: __filename
        },
        async(sigma, citel, text) => {
            const getRandom = (ext) => {
                return `${Math.floor(Math.random() * 10000)}${ext}`
            }
            if (!citel.quoted) return citel.reply(`_Reply to Any Sticker._`)
            let mime = citel.quoted.mtype
  if (mime =="imageMessage" || mime =="stickerMessage")
  {
            let media = await sigma.downloadAndSaveMediaMessage(citel.quoted);
            let name = await getRandom('.png')
            exec(`ffmpeg -i ${media} ${name}`, (err) => {
                let buffer = fs.readFileSync(media)
                sigma.sendMessage(citel.chat, { image: buffer }, { quoted: citel })
              
             fs.unlink(media, (err) => {
             if (err) { return console.error('File Not Deleted from From TOPHOTO AT : ' , media,'\n while Error : ' , err);  }
             else return console.log('File deleted successfully in TOPHOTO  at : ' , media);
             });
             
            })
            
  } else return citel.reply ("```Please, Reply To A Non Animated Sticker```")
        }
    )

 //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "stiker",
            shortcut: ["s"],
            infocmd: "Makes sticker of replied image/video.",
            kingclass: "sticker",
kingpath: __filename,
            use: 'reply to any image/video'
        },
        async(sigma, citel, text) => {
 let mime = citel.mtype;
let media ;
let pack = name.packname
let author = name.author 
if (mime =="imageMessage" || mime =="videoMessage") {  media = await citel.download(); }
else if (citel.quoted){ 
 mime = citel.quoted.mtype; 
 if (mime =="imageMessage" || mime =="videoMessage" || mime =="stickerMessage") {  media = await citel.quoted.download(); }
 else return citel.reply("```Uhh,Please reply to any image or video```")
}
else return citel.reply("```Uhh,Please reply to any image or video```");
          
if(mime =="videoMessage")
{
    let caption = { packname :name.packname, author:name.author}
    const { writeExifVid }  = require("../lib/exif.js")
    let buffer = await writeExifVid(media , caption  );   
    return await sigma.sendMessage(   citel.chat ,  { sticker: { url: buffer }, } );
}





                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.FULL ,
                    categories: ["🤩", "🎉"], // The sticker kingclass
                    id: "12345", // The sticker id
                    quality: 100, // The quality of the output file
                    background: "transparent",
                });
                const buffer = await sticker.toBuffer();
                return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            
        }
    )
//============================================================================
Module_Exports(
    {
        kingcmd: "steal",
        //shortcut: ["s"],
        infocmd: "Makes sticker of replied image/video.",
        kingclass: "sticker",
        kingpath: __filename,
        use: 'reply to any image/video'
    },
    async (sigma, citel, text) => {
        let mime = citel.mtype;
        let media;
        let pack;
        let author;

        if (text && text.includes(';')) {
            // If text is provided and contains a semicolon, use it to set pack and author
            [pack, author] = text.split(';');
        } else if(!pack || !author) return await citel.sent(`*Please reply to a sticker. Example: ${prefix}steal Maher;Zubair*`); {
            // Use default values if no text or no semicolon is provided
            
        } 

        if (mime === "imageMessage" || mime === "videoMessage") {
            media = await citel.download();
        } else if (citel.quoted) {
            mime = citel.quoted.mtype;
            if (mime === "imageMessage" || mime === "videoMessage" || mime === "stickerMessage") {
                media = await citel.quoted.download();
            } else {
                return citel.reply("```Uhh, Please reply to any image, video, or sticker```");
            }
        } else {
            return citel.reply("```Uhh, Please reply to any image, video, or sticker```");
        }

        if (mime === "videoMessage") {
            let caption = { packname: pack, author: author };
            const { writeExifVid } = require("../lib/exif.js");
            let buffer = await writeExifVid(media, caption);
            return await sigma.sendMessage(citel.chat, { sticker: { url: buffer } });
        }

        let sticker = new Sticker(media, {
            pack: pack,
            author: author,
            type: StickerTypes.FULL,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 100,
            background: "transparent",
        });

        const buffer = await sticker.toBuffer();
        return sigma.sendMessage(citel.chat, { sticker: buffer }, { quoted: citel });
    }
);

 //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "circle",
            shortcut: ["circlestic","circlesticker","cs"],
            infocmd: "Makes sticker of replied image/video.",
            kingclass: "sticker",
kingpath: __filename,
            use: 'reply to any image/video.'
        },
        async(sigma, citel, text) => {
            if (!citel.quoted) return citel.reply(`*_Reply To any Image or video_*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = name.packname
            author = name.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CIRCLE ,
                    categories: ["🤩", "🎉"], // The sticker kingclass
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*_Please reply to any image_*");

        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "crop",
            shortcut: ["cropstic","csticker","cropsticker","cr"],
            infocmd: "Makes sticker of replied image/video.",
            kingclass: "sticker",
kingpath: __filename,
            use: 'reply to any image/video.'
        },
        async(sigma, citel, text) => {
            if (!citel.quoted) return citel.reply(`*_Reply To any Image or video_*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = name.packname
            author = name.author
            if (mime =="imageMessage"  || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.CROPPED,
                    categories: ["🤩", "🎉"], // The sticker kingclass
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*_Please reply to any image_*");

        }
    )
   //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "round",
            shortcut: ["roundstic","roundsticker","rd"],
            infocmd: "Makes sticker of replied image/video.",
            kingclass: "sticker",
kingpath: __filename,
            use: 'reply to any image/video'
        },
        async(sigma, citel, text) => {
            if (!citel.quoted) return citel.reply(`*_Reply To any Image or video_*`);
          //console.log("Quoted Data here : ",citel.quoted);
            let mime = citel.quoted.mtype
            pack = name.packname
            author = name.author
           if (mime =="imageMessage" || mime =="stickerMessage") {
                let media = await citel.quoted.download();
                //citel.reply("*Processing Your request*");
                let sticker = new Sticker(media, {
                    pack: pack, // The pack name
                    author: author, // The author name
                    type: StickerTypes.ROUNDED ,
                    categories: ["🤩", "🎉"], // The sticker kingclass
                    id: "12345", // The sticker id
                    quality: 75, // The quality of the output file
                });
                const buffer = await sticker.toBuffer();
                return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });
            }else return citel.reply("*_Please reply to any image_*");

        }
    )
//---------------------------------------------------------------------------

 //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "meme",
        infocmd: "Write text on quoted image.",
        kingclass: "sticker",
        kingpath: __filename,
        use: '',
    },
    async(sigma, citel, text) => {
        if(!text && !citel.quoted) return await citel.reply("*Reply to Photo orWith text To Create Meme.*")
        if (citel.quoted.mtype != 'imageMessage') return citel.reply(`*_Please, Reply to PhotoOnly._*`)

      let textt = text.split('|')[0] || '' ;
      let isCheck = text.split('|')[1] || 'sticker'; 
      let tex1 =  textt.split(';')[0] || 'Zubi' ;    
      let tex2 =  textt.split(';')[1] || '_' ;

        let mee = await sigma.downloadAndSaveMediaMessage(citel.quoted)
        let bg = await TelegraPh(mee)
        let thmb =await getBuffer(`https://api.memegen.link/images/custom/${tex1}/${tex2}.png?background=${bg}`)

      if (isCheck.startsWith('p') || isCheck.startsWith('P')) { await sigma.sendMessage(citel.chat , {image : thmb , caption : name.caption })  }
      else
      {
        let sticker = new Sticker(thmb, {
                pack: name.packname, 
                author: name.author, 
                type: StickerTypes.FULL,
                categories: ["🤩", "🎉"], 
                id: "12345", 
                quality: 100,
                background: "transparent", 
            });
            const buffer = await sticker.toBuffer();
            return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel }); 
      }

        return await fs.unlinkSync(mee)

    }
)
 //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "quotely",
            infocmd: "Makes Sticker of quoted text.",
            shortcut: ["q"],
            kingclass: "sticker",
            use: 'reply to any message',
            kingpath: __filename
        },
        async(sigma, citel, text) => {
            if (!citel.quoted) return citel.reply(`Please quote/reply to any message`);
            let textt = citel.quoted.text;
            let pfp;
            try {
                pfp = await sigma.profilePictureUrl(citel.quoted.sender, "image");
            } catch (e) {
                pfp = THUMB_IMAGE;
            }
            let todlinkf = ["#FFFFFF", "#000000"];
            let todf = todlinkf[Math.floor(Math.random() * todlinkf.length)];
            let username = await sck1.findOne({ id: citel.quoted.sender })
            var tname;
            if (username.name && username.name !== undefined) {
                tname = username.name
            } else {
                tname = sigma.getName(citel.quoted.sender)
            }
            let body = {
                type: "quote",
                format: "png",
                backgroundColor: todf,
                width: 512,
                height: 512,
                scale: 3,
                messages: [{
                    avatar: true,
                    from: {
                        first_name: tname,
                        language_code: "en",
                        name: tname,
                        photo: {
                            url: pfp,
                        },
                    },
                    text: textt,
                    replyMessage: {},
                }, ],
            };
            let res = await axios.post("https://bot.lyo.su/quote/generate", body);
            let img = Buffer.alloc(res.data.result.image.length, res.data.result.image, "base64");
            return citel.send(img,{packname:name.packname,author:name.author},"sticker")

        }
    )
    //---------------------------------------------------------------------------
Module_Exports(
    {
        kingcmd: "fancy",
        infocmd: "Makes stylish/fancy given text",
        kingclass: "converter",
        use: '56 SIGMA MD',
        //react: "✅",
        kingpath: __filename
    },
    async(sigma, citel, text) => {
      if (!text) return citel.reply(`*_Give Me Some Text, Ex: ${prefix}fancy sigma-md_*`)
        if (!text) {
            let helpText = tiny(
                `*_fancy text generator_*\n★━━━━━━━━━━━━━━━━━━━━━★\n*example: ${prefix}fancy sigma _i am sigma male_*\n★━━━━━━━━━━━━━━━━━━━━━★\n\n`
            );
            listall(text).forEach((txt, num) => {
                helpText += `${(num += 1)} ${txt}\n`;
            });
            return await citel.reply(helpText);
        }

        if (isNaN(text.split(" ")[0])) {
            let helpText = tiny(
                `*_fancy text generator_*\n★━━━━━━━━━━━━━━━━━━━━━★\n*example: ${prefix}fancy 32 _i am sigma male_*\n★━━━━━━━━━━━━━━━━━━━━━★\n\n`
            );
            listall(text).forEach((txt, num) => {
                helpText += `${(num += 1)} ${txt}\n`;
            });
            return await citel.reply(helpText);
        }

        let fancyText = await fancytext(text.slice(text.indexOf(" ") + 1), text.split(" ")[0]);
        citel.reply(fancyText);
    }
);

    //---------------------------------------------------------------------------
Module_Exports({
            kingcmd: "tiny",
            infocmd: "Makes url tiny.",
            kingclass: "converter",
            use: 'www.google.com',
           // react: "✅",
            kingpath: __filename
        },
        async(sigma, citel, text) => {
            if (!text) return citel.reply(`_Give me Link_`)
            try {
                let link = text.split(" ")[0];
                let anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`);
                citel.send(`*_Here's Your Shortened Url_*\n\n${anu.data}`);
            } catch (e) {
                console.log(e);
            }
        }
    )
    //---------------------------------------------------------------------------
Module_Exports({
        kingcmd: "tomp3",
        shortcut:['mp3','toaudio'],
        infocmd: "changes type to audio.",
        kingclass: "converter",
        use: 'reply to any Video',
        kingpath: __filename
    },
   async(sigma, citel, text) => {
        if (!citel.quoted) return citel.reply(`_Reply to Any Video_`);
        let mime = citel.quoted.mtype
if (mime =="audioMessage" || mime =="videoMessage")
{
        let media = await sigma.downloadAndSaveMediaMessage(citel.quoted);
         const { toAudio } = require('../lib');
         let buffer = fs.readFileSync(media);
        let audio = await toAudio(buffer);
        sigma.sendMessage(citel.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: citel });
     
 
 fs.unlink(media, (err) => {
  if (err) { return console.error('File Not Deleted from From TOAUDIO AT : ' , media,'\n while Error : ' , err);  }
  else return console.log('File deleted successfully in TOAUDIO MP3 at : ' , media);
});

}
 else return citel.send ("*Please, Reply To A video Message*")
    }
)
     //---------------------------------------------------------------------------
Module_Exports({
    kingcmd: "tomp4",
    shortcut:['mp4','tovideo','tovid'],
    infocmd: "changes type to audio.",
    kingclass: "converter",
    use: 'reply to any Video',
    kingpath: __filename
},
async(sigma, citel, text) => {
    const { webp2mp4File } = require ("../lib")
    if (!citel.quoted) return citel.send('*_Reply To Animated Sticker or Gif_*')
    let mime = citel.quoted.mtype
    let mimetype = citel.quoted.mimetype
    if( mime !="videoMessage" && !/webp/.test(mimetype)) return await citel.send("*_Idiot... Reply To An Animated Sticker or Gif_*")
    let media = await sigma.downloadAndSaveMediaMessage(citel.quoted)
    try {
        if (/webp/.test(mimetype)) {  let webpToMp4 = await webp2mp4File(media);  media =  webpToMp4.result; }
        await sigma.sendMessage(citel.chat, { video: { url: media ,}, caption: `*╰┈➤ 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 ${name.botname}*`  },)
        try{ return await fs.unlink(media);}catch(e){ return console.log("Error While Deleting Tomp4 File :  ", e)}
    }catch(e){ return console.log("*Your Request Not Be Proceed due to Error.*  \n*_Error :_* ", e)}
}
)
//-------------------------------------------------------------------
Module_Exports({
    kingcmd: "pastebin",
    shortcut:["pbin"],
    infocmd: "To check ping",
    kingclass: "converter",
    kingpath: __filename,
},
async(Void, citel,text) => { 
if (!text) { text=citel.quoted.text;}
    if(!text) return citel.reply('*_Please Reply To Any Text To Get Link._*');
    let data = await pastebin.createPaste(text, "Maher Zubair");
    return citel.reply(`*_Here is your link._*\n`+data+`\n${sgen}`);
}
);
//----------------------------------------------- ---------------------------
Module_Exports({
    kingcmd: "paste",
    infocmd: "create paste of text.",
    kingclass: "converter",
    kingpath: __filename,
},
async(Void, citel,text) => {
let a = citel.quoted ? citel.quoted.text : citel.text;
let { data } = await axios.get(`https://api.telegra.ph/createPage?access_token=d3b25feccb89e508a9114afb82aa421fe2a9712b963b387cc5ad71e58722&title=SIGMA-MD+Bot&author_name=Maher_Zubair&content=[%7B"tag":"p","children":["${a.replace(/ /g,'+')}"]%7D]&return_content=true`);
return citel.reply(`*Paste created on telegraph*\nName:${util.format(data.result.title)} \nUrl: ${util.format(data.result.url)}`)
}
);


Module_Exports({
  kingcmd: "attp",

  infocmd: "Makes sticker of replied image/video.",
  kingclass: "sticker",
kingpath: __filename,
  use: ''
},
async(sigma, citel, text) => {
if(!text) return citel.reply("```Please, Give Me text```")
let url = `https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`
let media  = await getBuffer(url)

      let sticker = new Sticker(media, {
          pack: name.packname, 
          author: name.author, 
          type: StickerTypes.FULL,
          categories: ["🤩", "🎉"], 
          id: "12345", 
          quality: 100,
          background: "transparent", 
      });
      const buffer = await sticker.toBuffer();
      return sigma.sendMessage(citel.chat, {sticker: buffer}, {quoted: citel });

}
)


Module_Exports({

  kingcmd: "attp1",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.erdwpe.com/api/maker/attp?text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "attp2",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "attp3",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/attp2?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)


Module_Exports({

  kingcmd: "ttp1",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "ttp2",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp2?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "ttp3",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp3?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "ttp4",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp5?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)



Module_Exports({

  kingcmd: "ttp5",

  infocmd: "Makes glowing sticker of text.",

  kingclass: "sticker",

  kingpath: __filename,

},

async(Void, citel, text) => {

let a = await getBuffer(`https://api.lolhuman.xyz/api/ttp6?apikey=GataDios&text=${text}`)

return citel.reply(a,{packname:name.packname,author:name.author},"sticker") 

}

)