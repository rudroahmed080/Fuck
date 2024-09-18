module.exports = {
    config: {
        name: "b&w",
        aliases: ["black&white"],
        version: "2.0",
        author: "ASIF",
        countDown: 3,
        role: 0,
        description: {
            en: "𝗕𝗹𝗮𝗰𝗸 & 𝗪𝗵𝗶𝘁𝗲 𝗜𝗺𝗮𝗴𝗲"
        },
        category: "𝗜𝗠𝗔𝗚𝗘",
        guide: {
            en: "{pn} [ImgReply/imgLink]"
        }
    },

    onStart: async function ({ api, args, message, event }) {
        try {
        let imageUrl;
        if (event.type == "message_reply" && event.messageReply.attachments){
            imageUrl = event.messageReply.attachments[0].url;
        }else if (args[0]){
            imageUrl = args[0]
        }else {
            return message.reply("❎ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚛𝚎𝚙𝚕𝚢 𝚝𝚘 𝚊𝚗 𝚒𝚖𝚊𝚐𝚎.");
        }

        if(imageUrl){
            api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
            var waitMsg = await message.reply("⏳ |   𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝 𝚊 𝚠𝚑𝚒𝚕𝚎...");
        }    
        const imgStream = `${global.api.rubish}//edit-black?url=${encodeURIComponent(imageUrl)}&apikey=rubish69`;
        api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        message.unsend(waitMsg.messageID);
             message.reply({
                body: "✅ | 𝙷𝚎𝚛𝚎'𝚜 𝚈𝚘𝚞𝚛 𝙱𝚕𝚊𝚌𝚔 & 𝚆𝚑𝚒𝚝𝚎 𝙸𝚖𝚊𝚐𝚎 <😘",
                attachment: await global.utils.getStreamFromURL(imgStream)
            });
      } catch (error) {
            console.log(error);
            message.reply(`❎ | 𝙴𝚛𝚛𝚘𝚛: ${error.message}`);
      }
    }
};

