const axios = require('axios');
   module.exports = {
    config: {
      name: "bgcolor",
      aliases: [],
      author: "ASIF",
      version: "1.0",
      cooldowns: 5,
      role: 0,
      description: {
        en: "𝗜𝗺𝗮𝗴𝗲 𝗕𝗮𝗰𝗸𝗴𝗿𝗼𝘂𝗻𝗱 𝗖𝗼𝗹𝗼𝗿 𝗖𝗵𝗮𝗻𝗴𝗲𝗿"
      },
      category: "𝗜𝗠𝗔𝗚𝗘",
      guide: {
        en: "{pn} <reply with a image/reply with 2 images>"
      }
    },

  onStart: async function({ message, event, api, args }) {
    try{
      const color = args.join(' ') || "white";
      const setReactionInProgress = () => {
        api.setMessageReaction("⏳", event.messageID, (err) => {
          if (err) console.error(err);
        }, true);
      };


      const setReactionSuccess = () => {
        api.setMessageReaction("✅", event.messageID, (err) => {
          if (err) console.error(err);
        }, true);
      };

      if (event.type != "message_reply") {
        return message.reply("⚠ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗽𝗹𝘆 𝘁𝗼 𝗮 𝗺𝗲𝘀𝘀𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝘁𝘄𝗼 𝗶𝗺𝗮𝗴𝗲𝘀 𝗮𝘁𝘁𝗮𝗰𝗵𝗲𝗱.");
      }

      let links = [];
      for (let attachment of event.messageReply.attachments) {
        links.push(attachment.url);
      }

      if (color && links.length < 2 && links.length == 1) {
          try{
              setReactionInProgress();
              const img = await global.utils.uploadImgbb(links[0]);
              const imgLink = img.image.url;
              const transformingMessage1 = await message.reply({ body: "⏳ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝" });
              const res = await axios.get(`https://noobs-api.onrender.com/dipto/bgcolor?imageLink=${imgLink}&color=${color}`);

              const imgStream1 = await global.utils.getStreamFromURL(res.data.imageUrl);
              setReactionSuccess(); 
              await message.reply({ body: "✅", attachment: imgStream1 });
              await api.unsendMessage(transformingMessage1.messageID);
               }catch(error){
                console.error(error);
                message.reply("❎ | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐");
               }
      }
  else if(links.length == 2 && links.length > 1){
    try{
      const transformingMessage2 = await message.reply({ body: "⏳ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝" });
      const img = await global.utils.uploadImgbb(links[0]);
      const imgUrl = img.image.url;

      const img2 = await global.utils.uploadImgbb(links[1]);
      const otherImgUrl = img2.image.url;
   
       const { data } = await axios.get(`https://noobs-api.onrender.com/dipto/bgcolor?imageLink=${imgUrl}&otherimg=${otherImgUrl}`);

      const imgStream2 = await global.utils.getStreamFromURL(data.imageUrl);
      await api.unsendMessage(transformingMessage2.messageID);
      await message.reply({ body: "✅", attachment: imgStream2 });

    } catch (error) {
      console.error(error);
      message.reply("❎ | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐");
    }
    }
   } catch (error) {
    console.error(error);
    message.reply("❎ | 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚙𝚛𝚘𝚌𝚎𝚜𝚜𝚒𝚗𝚐");
  }
  }
};
