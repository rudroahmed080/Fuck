const axios = require('axios');

module.exports = {
  config: {
    name: "randompass",
    aliases: ["rpass", "randompassword", "pass", "rp"],
    author: "ASIF",  
    version: "2.0",
    cooldowns: 5,
    role: 0,
    description: {
      en: "𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗼𝗿"
    },
    category: "𝗜𝗡𝗙𝗢",
    guide: {
      en: "{p}{n} name of city"
    }
  },
  onStart: async function ({ api, event, args }) {
    
    const length = args.join(' ');

    if (!length) {
      api.sendMessage("Please provide a length.", event.threadID, event.messageID);
      return;
    }

   
    try {
      const apiKey = 'm3neaV+qN1FI+MDeoGJnmA==CwYimYwoSd5pheOd'; 
      const apiUrl = `https://api.api-ninjas.com/v1/passwordgenerator?length=${encodeURIComponent(length)}`;
      const response = await axios.get(apiUrl, { headers: { 'X-Api-Key': apiKey } });

      api.sendMessage(`𝗛𝗲𝗿𝗲'𝘀 𝗬𝗼𝘂𝗿 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗮𝘀𝘀𝘄𝗼𝗿𝗱: ${response.data.random_password}`, event.threadID, event.messageID);
    } catch (error) {
 
      api.sendMessage("Error fetching password", event.threadID, event.messageID);
    }
  },
};
