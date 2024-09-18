const axios = require('axios');

module.exports = {
    config: {
        name: "numinfo",
        version: "1.6.9",
        author: "ASIF",
        countDown: 5,
        role: 0,
        description: {
            en: "𝗡𝘂𝗺𝗯𝗲𝗿 𝘁𝗼 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻"
        },
        category: "𝗜𝗡𝗙𝗢",
        guide: {
            en: "{pn} [number]"
        }
    },

    onStart: async function ({ args, message, event}) {
        try {
            const fuck = args.join(" ");

            const permission = global.GoatBot.config.DEV;
            if (!permission.includes(event.senderID)) {
              message.reply(fuck);
              return;
            }
             const [number, country] = args.join(" ").split("|").map(str => str.trim());
          
 const proccessingMgs = await message.reply("⏳ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚆𝚊𝚒𝚝...");
            const { data } = await axios.get(`${global.GoatBot.config.API.DIPTO}/truecaller?number=${parseInt(number)}&country=${country || "bd"}`);

            const formattedBody = `
↪ 𝐍𝐔𝐌𝐁𝐄𝐑 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍𝐒 ↩

■ 𝗜𝗗: ${data.id}
■ 𝗡𝗔𝗠𝗘: ${data.name}
■ 𝗜𝗠𝗜𝗗: ${data.imid}

■ 𝗔𝗖𝗖𝗘𝗦𝗦: ${data.access}
■ 𝗕𝗔𝗗𝗚𝗘𝗦: ${data.badges}

■ 𝗡𝗨𝗠𝗕𝗘𝗥: ${data.fullnumber}
■ 𝗡𝗨𝗠𝗕𝗘𝗥 𝗧𝗬𝗣𝗘: ${data.numtype}
■ 𝗖𝗢𝗨𝗡𝗧𝗥𝗬 𝗖𝗢𝗗𝗘: ${data.countryCode}
■ 𝗖𝗔𝗥𝗥𝗜𝗘𝗥: ${data.sim}
■ 𝗧𝗬𝗣𝗘: ${data.type}

■ 𝗔𝗗𝗗𝗥𝗘𝗦𝗦: ${data.address}
■ 𝗧𝗜𝗠𝗘𝗭𝗢𝗡𝗘: ${data.timezone}

■ 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 𝗦𝗘𝗥𝗩𝗜𝗖𝗘: ${data.gmail}
■ 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 𝗖𝗔𝗣𝗧𝗜𝗢𝗡: ${data.icap}
■ 𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗔𝗗𝗗𝗥𝗘𝗦𝗦 𝗜𝗗: ${data.iaddress}
`;
message.unsend(proccessingMgs.messageID);
if (data.image) {
   message.reply({
        body: formattedBody,
        attachment: await global.utils.getStreamFromURL(data.image)
    });
} else {
    message.reply({
        body: formattedBody
    });
}
        } catch (error) {
            console.error(error);
            message.reply("❌ | " + error);
        }
    }
};