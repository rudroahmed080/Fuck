const axios = require("axios");

module.exports = {
  config: {
    name: 'simsimi',
    aliases: ["sim"],
    version: '3.0',
    author: 'RUBISH',
    countDown: 0,
    role: 0,
    description: {
      vi: '𝗖𝗵𝗮𝘁 𝘄𝗶𝘁𝗵 𝘀𝗶𝗺',
      en: '𝗖𝗵𝗮𝘁 𝘄𝗶𝘁𝗵 𝘀𝗶𝗺'
    },
    category: '𝗔𝗜',
    guide: {
      vi: '   {pn} Hi  ',
        
      en: '   {pn} Hi '
      
    }
  },

  onReply: async function ({ api, event, handleReply }) {
    if (event.type == "message_reply") {
      const reply = event.body.toLowerCase();
      if (isNaN(reply)) {
        try {
          const response = await axios.get(`${global.api.asif}/sim/ask?message=${encodeURIComponent(reply)}`);
          const ok = response.data.answer;
          await api.sendMessage(ok, event.threadID, (error, info) => {
            global.GoatBot.onReply.set(info.messageID, {
              commandName: this.config.name,
              type: 'reply',
              messageID: info.messageID,
              author: event.senderID,
              link: ok
            });
          }, event.messageID);
        } catch (error) {
          console.error(error);
        }
      }
    }
  },

  onStart: async function ({ api, args, event }) {
    try {
      const asif = args.join(" ").toLowerCase();
      if (!args[0]) {
        api.sendMessage(
          "Bolo bby😘",
          event.threadID,
          event.messageID
        );
        return;
      }
      if (asif) {
        const response = await axios.get(`${global.api.asif}/sim/ask?message=${encodeURIComponent(asif)}`);
        const mg = response.data.answer;
        await api.sendMessage({ body: mg }, event.threadID, (error, info) => {
          global.GoatBot.onReply.set(info.messageID, {
            commandName: this.config.name,
            type: 'reply',
            messageID: info.messageID,
            author: event.senderID,
            link: mg
          });
        }, event.messageID);
      }
    } catch (error) {
      console.error(`Failed to get an answer: ${error}`);
      api.sendMessage(`Error: ${error.message}`, event.threadID, event.messageID);
    }
  }
};
