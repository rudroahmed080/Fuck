const axios = require("axios");

module.exports = {
  config: {
    name: "memberlist",
    version: "1.0",
    author: "Samuel Kâñèñgeè",
    countDown: 5,
    role: 0,
    description: "MemberList",
    category: "info",
    guide: "{pn}"
  },
  onStart: async function ({ api, event }) {
    try {
      const threadInfo = await api.getThreadInfo(event.threadID);
      const participants = threadInfo.participantIDs;

      let message = `𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘: ${threadInfo.name}\n𝗚𝗥𝗢𝗨𝗣 𝗜𝗗: ${threadInfothreadID}\n𝗧𝗢𝗧𝗔𝗟 𝗠𝗘𝗠𝗕𝗘𝗥𝗦: ${participants.length}\n`;

      for (const userId of participants) {
        const userProfile = await api.getUserInfo(userId);
        const username = userProfile[userId].name;
        message += `𝗨𝗦𝗘𝗥 𝗡𝗔𝗠𝗘: ${username}\n𝗨𝗦𝗘𝗥 𝗜𝗗: ${userId}\n`;
      }

      api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
    }
  }
};