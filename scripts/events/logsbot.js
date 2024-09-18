const { getTime } = global.utils;

module.exports = {
  config: {
    name: "logsbot",
    isBot: true,
    version: "1.4",
    author: "NTKhang",
    envConfig: {
      allow: true
    },
    category: "events"
  },

  langs: {
    en: {
      title: "🔔 | 𝗕𝗢𝗧 𝗡𝗢𝗧𝗜𝗙𝗜𝗖𝗔𝗧𝗜𝗢𝗡 | 🔔\n﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n",
      added: `
✅ | 𝗘𝘃𝗲𝗻𝘁: 𝗕𝗼𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗮𝗱𝗱𝗲𝗱 𝘁𝗼 𝗮 𝗻𝗲𝘄 𝗴𝗿𝗼𝘂𝗽

◈ 𝗔𝗱𝗱𝗲𝗱 𝗯𝘆 ➾ %1
`,
      kicked: `
❌ | 𝗘𝘃𝗲𝗻𝘁: 𝗕𝗼𝘁 𝗵𝗮𝘀 𝗯𝗲𝗲𝗻 𝗸𝗶𝗰𝗸𝗲𝗱
◈ 𝗞𝗶𝗰𝗸𝗲𝗱 𝗯𝘆: %1`,
      footer: `
◈ 𝗨𝗜𝗗 ➾ %1

◈ 𝗚𝗿𝗼𝘂𝗽 𝗡𝗮𝗺𝗲 ➾ %2

◈ 𝗧𝗜𝗗 ➾ %3

◈ 𝗧𝗜𝗠𝗘 ➾ %4`
    }
  },

  onStart: async ({ usersData, threadsData, event, api, getLang }) => {
    if (
      (event.logMessageType == "log:subscribe" && event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
      || (event.logMessageType == "log:unsubscribe" && event.logMessageData.leftParticipantFbId == api.getCurrentUserID())
    ) return async function () {
      let msg = getLang("title");
      const { author, threadID } = event;
      if (author == api.getCurrentUserID())
        return;
      let threadName;
      const { config } = global.GoatBot;

      if (event.logMessageType == "log:subscribe") {
        if (!event.logMessageData.addedParticipants.some(item => item.userFbId == api.getCurrentUserID()))
          return;
        threadName = (await api.getThreadInfo(threadID)).threadName;
        const authorName = await usersData.getName(author);
        msg += getLang("added", authorName);
      }
      else if (event.logMessageType == "log:unsubscribe") {
        if (event.logMessageData.leftParticipantFbId != api.getCurrentUserID())
          return;
        const authorName = await usersData.getName(author);
        const threadData = await threadsData.get(threadID);
        threadName = threadData.threadName;
        msg += getLang("kicked", authorName);
      }
      const time = getTime("DD/MM/YYYY HH:mm:ss");
      msg += getLang("footer", author, threadName, threadID, time);

      for (const adminID of config.adminBot)
        api.sendMessage(msg, adminID);
    };
  }
};