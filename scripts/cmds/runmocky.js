const fs = require('fs').promises;
const axios = require('axios');

module.exports.config = {
  name: "runmocky",
  version: "6.9.0",
  role: 0,
  author: "dipto",
  description: "𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗰𝗼𝗱𝗲 𝗶𝗻𝘁𝗼 𝗹𝗶𝗻𝗸",
  category: "𝗧𝗢𝗢𝗟",
  guide:{ en: "[filename]/[reply and file name]"},
  coolDowns: 1
};

module.exports.onStart = async function ({ api, event, args }) {
  const admin = global.GoatBot.config.DEV;
  const fileName = args[0];
  if (!admin.includes(event.senderID)) {
    api.sendMessage(args.join(' '), event.threadID, event.messageID);
    return;
  }
  const filePath = `scripts/cmds/${fileName}.js`;
  try {
    const code = event.type === "message_reply" ? event.messageReply.body : await fs.readFile(filePath, 'utf-8');
    const en = encodeURIComponent(code);
    const url = `${global.GoatBot.config.API.DIPTO}/runmocky`;
    const response = await axios.post(url, { code: en });
    if (response.data && response.data.data) {
      const diptoUrl = response.data.data;
      api.sendMessage(diptoUrl, event.threadID, event.messageID);
    } else {
      throw new Error("API response does not contain expected data.");
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      api.sendMessage("File not found.", event.threadID, event.messageID);
    } else {
      console.error("An error occurred:", error);
      api.sendMessage("Error occurred while processing the command.", event.threadID, event.messageID);
    }
  }
}