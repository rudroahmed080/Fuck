const fs = require("fs");
const axios = require("axios");

module.exports = {
  config: {
    name: "sdxl",
    author: "jarif",
    version: "2.0",
    countDown: 5,
    role: 0,
    description: "𝗣𝗿𝗼𝗺𝗽𝘁 𝘁𝗼 𝗽𝗵𝗼𝘁𝗼",
    category: "𝗜𝗠𝗔𝗚𝗘",
    guide: {
      en: "[prompt]"
    }
  },
  onStart: async function ({ api, event, args }) {
    let path = __dirname + "/cache/image.png";
    const txt = args.join(" ");

    let tid = event.threadID;
    let mid = event.messageID;

    if (!args[0] || !txt) return api.sendMessage("Please provide a prompt and a model.", tid, mid);

    try {
      const wait = await api.sendMessage("⏳ Generating...", tid, mid);

      let enctxt = encodeURIComponent(txt); 
      let url = `https://rubish-apihub.onrender.com/rubish//sdxl?prompt=${enctxt}&apikey=rubish69`;

      let result = (await axios.get(url, { responseType: "arraybuffer" })).data; 

      fs.writeFileSync(path, Buffer.from(result, "utf-8"));
      api.sendMessage({ attachment: fs.createReadStream(path) }, tid, () => fs.unlinkSync(path), mid);
      api.unsendMessage(wait.messageID);
    } catch (e) {
      return api.sendMessage(e.message, tid, mid);
    }
  }
};
