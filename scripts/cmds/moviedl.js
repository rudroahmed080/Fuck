const fetch = require("node-fetch");
const PastebinAPI = require('pastebin-js');

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
    name: "moviet",
    aliases: ["torrent, moviedl"],
    version: "1.0",
    author: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
    countDown: 5,
    role: 0,
    description: { 
      en: "𝐆𝐞𝐭 𝐦𝐨𝐯𝐢𝐞 𝐭𝐨𝐫𝐫𝐞𝐧𝐭 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐥𝐢𝐧𝐤 𝐛𝐲 𝐭𝐡𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝"
      },
    category: "𝗨𝗧𝗜𝗟𝗜𝗧𝗬",
    guide: "{p}{n} <𝚖𝚘𝚟𝚒𝚎_𝚗𝚊𝚖𝚎>"
  },

onStart: async function ({ api, event, args, commandName }) {

    const search = args.join(" ");

    if (!search) {
      api.sendMessage("❎ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 𝚝𝚑𝚎 𝚗𝚊𝚖𝚎 𝚘𝚏 𝚝𝚑𝚎 𝚖𝚘𝚟𝚒𝚎 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚜𝚎𝚊𝚛𝚌𝚑 𝚏𝚘𝚛.", event.threadID);
      return;
    }

    const searchUrl = `https://sms-bomb.vercel.app/api/torrent.php?input=${encodeURIComponent(search)}`;

    try {
      const searchResponse = await fetch(searchUrl);
      const searchResults = await searchResponse.json();

      let replyMessage = "🔍 | 𝐒𝐞𝐚𝐫𝐜𝐡 𝐑𝐞𝐬𝐮𝐥𝐭𝐬 | 🔍\n\n";
      for (let i = 0; i < 8; i++) {
        var movie = searchResults[i];
        replyMessage += `${i + 1}. ${movie.name}\n`;
      }
      replyMessage += "\n> 𝚁𝚎𝚙𝚕𝚢 𝚠𝚒𝚝𝚑 𝚝𝚑𝚎 𝚗𝚞𝚖𝚋𝚎𝚛 𝚘𝚏 𝚝𝚑𝚎 𝚖𝚘𝚟𝚒𝚎 𝚢𝚘𝚞 𝚠𝚊𝚗𝚝 𝚝𝚘 𝚐𝚎𝚝 𝚝𝚘𝚛𝚛𝚎𝚗𝚝 𝚕𝚒𝚗𝚔.";
      const formattedFont = formatFont(replyMessage);
      const reply = await api.sendMessage(formattedFont, event.threadID);
      const replyMessageID = reply.messageID;

      global.GoatBot.onReply.set(replyMessageID, {
        commandName: this.config.name,
        author: event.senderID,
        messageID: replyMessageID,
        query: search,
        l: movie,
      });

    } catch (error) {
      console.error(error);
      api.sendMessage("❌ | 𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗵𝗶𝗹𝗲 𝗳𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗺𝗼𝘃𝗶𝗲.", event.threadID);
    }
  },
  
   onReply: async ({ api, event, Reply, commandName }) => {
    const { author, l, query } = Reply;

    if (event.senderID !== author) return;

    const selectedNumber = parseInt(event.body);

    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > l.length) {
      api.sendMessage("❎ | 𝗜𝗻𝘃𝗮𝗹𝗶𝗱 𝗼𝗽𝘁𝗶𝗼𝗻 𝘀𝗲𝗹𝗲𝗰𝘁𝗲𝗱. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗿𝗲𝗽𝗹𝘆 𝘄𝗶𝘁𝗵 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗻𝘂𝗺𝗯𝗲𝗿.", event.threadID);
      return;
    }
     const searchUrl = `https://sms-bomb.vercel.app/api/torrent.php?input=${encodeURIComponent(query)}`;     
     const searchResponse = await fetch(searchUrl);
     const searchResults = await searchResponse.json();
    try {
      const Info = searchResults[selectedNumber - 1];

     let infoMessage = `magnet:?xt=urn:btih:${Info.info_hash}&dn=${encodeURIComponent(Info.name)}&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Fmovies.zsw.ca%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2Fopen.stealth.si%3A80%2Fannounce&tr=udp%3A%2F%2Ftracker.0x.tf%3A6969%2Fannounce`;
      const pastebin = new PastebinAPI({
        api_dev_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9',
        api_user_key: 'LFhKGk5aRuRBII5zKZbbEpQjZzboWDp9',
      });
      const paste = await pastebin
        .createPaste({
          text: infoMessage,
          title: Info.name,
          format: null,
          privacy: 1,
        })
        .catch((error) => {
          console.error(error);
        });

      const rawPaste = paste.replace("pastebin.com", "pastebin.com/raw");

      api.sendMessage(`✅ | 𝐘𝐨𝐮𝐫 𝐫𝐞𝐪𝐮𝐞𝐬𝐭𝐞𝐝 𝐦𝐨𝐯𝐢𝐞 𝐝𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐭𝐨𝐫𝐫𝐞𝐧𝐭 𝐥𝐢𝐧𝐤 𝐮𝐩𝐥𝐨𝐚𝐝𝐞𝐝 𝐭𝐨 𝐩𝐚𝐬𝐭𝐞𝐛𝐢𝐧: ${rawPaste}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("❌ | 𝗔𝗻 𝗲𝗿𝗿𝗼𝗿 𝗼𝗰𝗰𝘂𝗿𝗿𝗲𝗱 𝘄𝗵𝗶𝗹𝗲 𝗳𝗲𝘁𝗰𝗵𝗶𝗻𝗴 𝗺𝗼𝘃𝗶𝗲.", event.threadID);
    }
   }
  };
