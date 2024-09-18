const axios = require("axios");

module.exports.config = {
  name: "sdxl3",
  version: "1.0.0",
  role: 2,
  author: "Dipto",
  description: "𝗣𝗿𝗼𝗺𝗽𝘁 𝘁𝗼 𝗽𝗵𝗼𝘁𝗼",
  category: "𝗜𝗠𝗔𝗚𝗘",
  guide: {
    en: `
    {pn} [prompt] --ratio 16:3`,
  },
  countDown: 10,
};

module.exports.onStart = async function ({ message, api, args, event }) {
  try {
    let prompt = args.slice(1).join(" ").toLowerCase() || "cute girl";
      if(prompt){
      const ratio = prompt.split("--ratio")[1].trim() || "1:1";
      api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
      const wait = await message.reply("⏳ | 𝚆𝚊𝚒𝚝 𝙱𝚊𝚋𝚢 <😘");
      const response = await axios.get(`${global.api.dipto}/sdxl3?&prompt=${encodeURIComponent(prompt)}&ratio=${ratio}`
      );
        api.setMessageReaction("✅", event.messageID, (err) => {}, true);
        message.unsend(wait.messageID);
        await api.sendMessage(
          {
            body: "✅ | 𝙷𝚎𝚛𝚎'𝚜 𝚢𝚘𝚞𝚛 𝚙𝚑𝚘𝚝𝚘 <😘",
            attachment: await global.utils.getStreamFromURL(imgStream),
          },
          event.threadID, event.messageID
        );
      }
  } catch (error) {
    console.error(`Failed to generate: ${error}`);
    message.reply(`❎ | 𝙴𝚛𝚛𝚘𝚛: ${error.message}`);
  }
};
