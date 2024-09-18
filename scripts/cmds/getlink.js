const { shortenURL, uploadImgbb  } = global.utils;
const { get } = require("axios");

module.exports = {
  config: {
    name: "getlink",
    aliases: ['gl', 'g'],
    version: "1.0",
    author: "ASIF",
    countDown: 0,
    role: 0, 
    description: "𝗚𝗲𝘁 𝗱𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝘂𝗿𝗹 𝗳𝗿𝗼𝗺 𝘃𝗶𝗱𝗲𝗼, 𝗮𝘂𝗱𝗶𝗼 𝘀𝗲𝗻𝘁 𝗳𝗿𝗼𝗺 𝗴𝗿𝗼𝘂𝗽",
    category: "𝗨𝗧𝗜𝗟𝗜𝗧𝗬",
    guide: "{pn} [--t/t/tinyurl] reply or add link of image"
    + "\n{pn} [--i/i/imgbb] reply or add link of image"
    + "\n{pn} [--tg/tg/telegraph] reply or add link of image"
    + "\n{pn} reply or add link of image"
  },

  onStart: async function ({ message, args, event }) {
    try{
    let { messageReply, type, senderID } = event;
    let num = 0
    let length = messageReply.attachments.length;
    var msg = `✅ | 𝙷𝚎𝚛𝚎 𝚒𝚜 𝚢𝚘𝚞𝚛 ${length} 𝚏𝚒𝚕𝚎 𝚊𝚝𝚝𝚊𝚌𝚑𝚎𝚍 <😘\n\n`;
    if(args[0] === '--t' || args[0] === 't' || args[0] === 'tinyurl' || args[0] == '-t'){
          if (type !== "message_reply"){ 
            return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚊𝚞𝚍𝚒𝚘, 𝚟𝚒𝚍𝚎𝚘, 𝚘𝚛 𝚙𝚑𝚘𝚝𝚘");
          }
          if (!messageReply.attachments || length == 0){
             return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚊𝚞𝚍𝚒𝚘, 𝚟𝚒𝚍𝚎𝚘, 𝚘𝚛 𝚙𝚑𝚘𝚝𝚘");
          }
          else {
              for (var i = 0; i < length; i++) {
              var shortLink = await shortenURL(messageReply.attachments[i].url);
              num +=1;
              msg += `${num}: ${shortLink}\n`;
            }
            message.reply(msg);
          }
        } else if(args[0] == 'i' || args[0] == '--i' || args[0] == 'imgbb' || args[0] == '-i'){
          if (type !== "message_reply" && !["photo", "sticker"].includes(messageReply.attachments[i]?.type)){ 
            return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚙𝚑𝚘𝚝𝚘");
          }
          if (!messageReply.attachments || length == 0){
             return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚙𝚑𝚘𝚝𝚘");
          }
          else {
              for (var i = 0; i < length; i++) {
              var imgLink = await uploadImgbb(messageReply.attachments[i].url);
              num +=1;
              msg += `${num}: ${imgLink.image.url}\n`;
            }
            message.reply(msg);
          }
        } else if(args[0] == 'tg' || args[0] == 'telegraph' || args[0] == '-tg' || args[0] == '--tg'){
        if (type !== "message_reply"){ 
          return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚙𝚑𝚘𝚝𝚘");
        }
        if (!messageReply.attachments || length == 0){
           return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚙𝚑𝚘𝚝𝚘");
        }
        else {
          for (var i = 0; i < length; i++) {
            var shortLink = await shortenURL(messageReply.attachments[i].url);
            const res = await get(`${global.api.dipto}/tg?url=${shortLink}`);
              num += 1;
              msg += `${num}: ${res.data.data}\n`;
          }
          message.reply(msg);
        }
      }
     if(!args[0]){
    if (type !== "message_reply") return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚊𝚞𝚍𝚒𝚘, 𝚟𝚒𝚍𝚎𝚘, 𝚘𝚛 𝚙𝚑𝚘𝚝𝚘");
    else if (!messageReply.attachments || length == 0) return message.reply("❌ | 𝚈𝚘𝚞 𝚖𝚞𝚜𝚝 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊 𝚌𝚎𝚛𝚝𝚊𝚒𝚗 𝚊𝚞𝚍𝚒𝚘, 𝚟𝚒𝚍𝚎𝚘, 𝚘𝚛 𝚙𝚑𝚘𝚝𝚘");
    else if(type == "message_reply" && messageReply.attachments || length !== 0){
          for (var i = 0; i < length; i++) {
        num +=1;
        msg += `${num}: ${messageReply.attachments[i].url}\n\n`;
      }
        message.reply(msg);
    }
     }
      } catch (err){
        console.log(err);
        message.reply(`❎ | 𝙴𝚛𝚛𝚘𝚛: ${err.message}`);
      }
  }
};

