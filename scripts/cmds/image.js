const axios = require('axios');

module.exports = {
  config: {
    name: "img",
    aliases:['unsplash2'],
    author: "ChatGPT",
    role: 0,
    version: "4.0",
    description: "𝗦𝗲𝗮𝗿𝗰𝗵 𝗳𝗼𝗿 𝗵𝗶𝗴𝗵-𝗾𝘂𝗮𝗹𝗶𝘁𝘆 𝗶𝗺𝗮𝗴𝗲𝘀 𝘂𝘀𝗶𝗻𝗴 𝗨𝗻𝘀𝗽𝗹𝗮𝘀𝗵 𝗔𝗣𝗜 𝗮𝗻𝗱 𝗿𝗲𝘁𝘂𝗿𝗻 𝗮 𝘀𝗽𝗲𝗰𝗶𝗳𝗶𝗲𝗱 𝗻𝘂𝗺𝗯𝗲𝗿 𝗼𝗳 𝗿𝗲𝘀𝘂𝗹𝘁𝘀.",
    category: "𝗨𝗧𝗜𝗟𝗜𝗧𝗬",
    guide: {
      vi: "",
      en: "{pn} <ImageType>"
    }
  },

  onStart: async function({ args, message }) {
    try {
      const query = args.join(' ');
      const numResults = parseInt(args[0]) || 5; // Default to 5 if no number is provided
      const url = `https://api.unsplash.com/search/photos?page=1&per_page=${numResults}&query=${query}&client_id=oWmBq0kLICkR_5Sp7m5xcLTAdkNtEcRG7zrd55ZX6oQ`;

      const { data } = await axios.get(url);
      const results = data.results.map(result => result.urls.regular);

      const attachments = await Promise.all(results.map(url => global.utils.getStreamFromURL(url)));

      return message.reply({body: `𝙷𝚎𝚛𝚎 𝚊𝚛𝚎 𝚝𝚑𝚎 𝚝𝚘𝚙 ${numResults} 𝚑𝚒𝚐𝚑-𝚚𝚞𝚊𝚕𝚒𝚝𝚢 𝚒𝚖𝚊𝚐𝚎 𝚛𝚎𝚜𝚞𝚕𝚝𝚜 𝚏𝚘𝚛 "${query}" 𝚏𝚛𝚘𝚖 𝚄𝚗𝚜𝚙𝚕𝚊𝚜𝚑:`, attachment: attachments});
    } catch (error) {
      console.error(error);
      return message.reply("𝚂𝚘𝚛𝚛𝚢, 𝙸 𝚌𝚘𝚞𝚕𝚍𝚗'𝚝 𝚏𝚒𝚗𝚍 𝚊𝚗𝚢 𝚛𝚎𝚜𝚞𝚕𝚝𝚜.");
    }
  }
}