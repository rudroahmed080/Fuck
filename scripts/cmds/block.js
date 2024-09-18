const { findUid } = global.utils;
const regExCheckURL = /^(http|https):\/\/[^ "]+$/;

module.exports = {
    config: {
        name: "block",
        aliases: ["blk"],
        version: "2.0",
        author: "ASIF",
        countDown: 1,
        role: 2,
        description: {
            en: "𝗕𝗹𝗼𝗰𝗸 𝗮 𝗨𝘀𝗲𝗿"
        },
        category: "𝗢𝗪𝗡𝗘𝗥",
        guide: {
            en: "{pn} [userId/reply/mention]"
        }
    },

    onStart: async function ({ api, args, message, event}) {
        const [userId] = args;
        let userID = '';
        const mention = Object.keys(event.mentions);
        if(mention.length == 1) {
            userID = mention[0];
        }else if (!userId && event.type == 'message_reply') {
            userID = event.messageReply.senderID;
        }else if (args[0].match(regExCheckURL)) {
            try {
            userID = await findUid(userId);
            }
            catch (e) {
            console.log(e.message)
            }
        }else {
            userID = userId;
        }
        const stats = "block";
        if(!userID){                    
            return message.reply("❎ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝙿𝚛𝚘𝚟𝚒𝚍𝚎 𝚊 𝚄𝚜𝚎𝚛𝙸𝙳")
        }
        try {
            await api.changeBlockedStatus(userID, stats); 
            if(stats === 'block'){
            return message.reply(`✅ | 𝚂𝚞𝚌𝚌𝚎𝚜𝚜𝚏𝚞𝚕𝚕𝚢 𝙱𝚕𝚘𝚌𝚔𝚎𝚍 𝚄𝚜𝚎𝚛: ${userID}`);
            }
        } catch (error) {
            console.log(error);
            return message.reply(`❎ | 𝙴𝚛𝚛𝚘𝚛: ${error.message}`);
        }
    }
};