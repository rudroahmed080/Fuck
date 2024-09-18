const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "pixart",
    aliases: ["pix"],
    version: "1.0",
    author: "Dipto",
    countDown: 15,
    role: 0,
    description: "𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝗶𝗺𝗮𝗴𝗲𝘀 𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 𝗽𝗶𝘅𝗮𝗿𝘁 𝗔𝗶",
    category: "𝗔𝗜",
    guide: {
      en: "{pn} [prompt] --ratio [ratio] --style [style] --model [model]"
    }
  },

  onStart: async function ({ api, event, args }) {
  const prompt = args.join(" ");
  if (!prompt) {
   return api.sendMessage("❌| Wrong Format...",event.threadID,event.messageID);
  }
    let ratio = "1:1";
    let style = "";
    let model = "";
    for (let i = 0; i < args.length; i += 2) {
        switch (args[i]) {
            case "--ratio":
                ratio = args[i + 1];
                args.splice(i, 2);
                break;
            case "--style":
                style = args[i + 1];
                args.splice(i, 2); 
                break;
            case "--model":
                modelNumber = args[i + 1];
                args.splice(i, 2); 
                break;
        }
    }
    try {
      const w = await api.sendMessage("Wait koro baby < 😽", event.threadID);
  
const response = await axios.get(`${global.api.dipto}/pixart?prompt=${encodeURI(prompt)}&ratio=${ratio}&style=${style}&model=${model}`)
      const data = response.data.imgUrls;
      if (!data || data.length === 0) {
        api.sendMessage("Empty response or no images generated.",event.threadID,event.messageID);
      }
      const diptoo = [];
      for (let i = 0; i < data.length; i++) {
        const imgUrl = data[i];
        const imgResponse = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imgPath = path.join(__dirname, 'dvassests', `${i + 1}.jpg`);
        await fs.outputFile(imgPath, imgResponse.data);
        diptoo.push(fs.createReadStream(imgPath));
      }
      await api.unsendMessage(w.messageID);
      await api.sendMessage({
  body: `✅ | Here's Your Generated Photo<😘`,
        attachment: diptoo
      },event.threadID, event.messageID);
    } catch (error) {
      console.error(error);
      await api.sendMessage(`Generation failed!\nError: ${error.message}`,event.threadID, event.messageID);
    }
  }
}