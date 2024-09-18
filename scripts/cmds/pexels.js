const axios = require('axios');
const { getStreamFromURL } = global.utils;
function formatFont(text) {
  const fontMapping = {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}

module.exports = {
  config: {
    name: "pexels",
    aliases: ["pex", "pexel"],
    version: "2.0",
    author: "RUBISH",//Remake By ASIF
    countDown: 5,
    role: 0,
    description: {
      en: "𝗦𝗲𝗮𝗿𝗰𝗵 𝗜𝗺𝗮𝗴𝗲𝘀 𝗙𝗿𝗼𝗺 𝗣𝗲𝘅𝗲𝗹𝘀",
    },
    guide: {
      en: "{pn}" + formatFont("[query] | [limit] | [pageNumber]"),
    },
    category: "𝗦𝗘𝗔𝗥𝗖𝗛",
  }, 
  onStart: async function ({ message, event, api, args }) {
    try {
      if (args.length === 0) {
        await message.reply(formatFont("⚠ | Please provide a query, limit, pageNumber."));
        return;
      }

      let [query, limit, pageNum] = (args.join(' ')).split('|').map(item => item.trim());
      const encQuery = encodeURIComponent(query);

      const apiURL = `https://4s1f-api.replit.app/pexels?query=${encQuery}&limit=${limit}&pageNumber=${pageNum}`;
      
      api.setMessageReaction("⏳", event.messageID, (err) => {}, true);
      const processingMessage = await message.reply(formatFont(`⏳ | Please wait a few seconds...`));

      const { data } = await axios.get(apiURL);

      if (!data.imgUrl || data.imgUrl.length === 0) {
          api.setMessageReaction("💔", event.messageID, (err) => {}, true);
          await message.reply(formatFont(`
⭕ | No images found for the 

❏ Query: ${query}. 

❏ Please try again.`));
        return;
      }

      const attachment = await Promise.all(data.imgUrl.map(async (imgURL) => {
        const imgStream = await getStreamFromURL(imgURL);
        return imgStream;
      }));
      api.setMessageReaction("✅", event.messageID, (err) => {}, true);
      await message.reply({
        body: formatFont(`
✅ | Here are the images for..

❏ Query: "${query}" 

❏ Page Number: ${pageNum}

❏ Limit Search: ${limit}
`),
        attachment: attachment,
      });

      message.unsend((await processingMessage).messageID);
    } catch (error) {
        console.error(error);
        await message.reply(formatFont("⚠ | An unexpected error occurred. Please try again later."));
      }
   }
};