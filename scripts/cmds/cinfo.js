const fs = require('fs');
const moment = require('moment-timezone');
const NepaliDate = require('date-bengali-revised');
const fast = require('fast-speedtest-api');

module.exports = {
  config: {
    name: "cinfo",
    aliases: ['info', 'ownerinfo'],
    version: "1.3",
    author: "AceGun",
    countDown: 5,
    role: 0,
    description: {
      vi: "",
      en: "Sends information about the bot and admin along with an image."
    },
    category: "info",
    guide: {
      en: "{pn}"
    },
    envConfig: {}
  },

  onStart: async function ({ message, api, event, usersData, threadsData }) {
    const allUsers = await usersData.getAll();
    const allThreads = await threadsData.getAll();
    const speedTest = new fast({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
        verbose: false,
        timeout: 10000,
        https: true,
        urlCount: 5,
        bufferSize: 8,
        unit: fast.UNITS.Mbps
      });
    const result = await speedTest.getSpeed();
    const botName = global.GoatBot.config.nickNameBot;
    const botPrefix = global.GoatBot.config.prefix;
    const authorName = global.GoatBot.config.authorName;
    const authorFB = global.GoatBot.config.authorFB;
    const authorInsta = "4s1f_x69";
    const status = "In a relationship";
    const timeStart = Date.now();

    const urls = JSON.parse(fs.readFileSync('scripts/cmds/assets/info.json'));
    const link = urls[Math.floor(Math.random() * urls.length)];

    // Get current date and time in Asia/Kathmandu timezone
    const now = moment().tz('Asia/Dhaka');
    const date = now.format('MMMM DD YYYY');
    const time = now.format('h:mm:ss A');

    // Get Nepali date
    const nepaliDate = new NepaliDate(now.toDate());
    const bsDateStr = nepaliDate.format("dddd, DD MMMM");

    // Calculate bot uptime
    const uptime = process.uptime();
    const uptimeString = formatUptime(uptime);

    const ping = Date.now() - timeStart;

    const replyMessage = `===「 Bot & Owner Info 」===
❏ Bot Name: ${botName}
❏ Bot Prefix: ${botPrefix}
❏ Author Name: ${authorName}
❏ FB: ${authorFB}
❏ Instagram: ${authorInsta}
❏ Status: ${status}
❏ Date: ${date}
❏ BS Date: ${bsDateStr}
❏ Total Threads: ${allThreads.length}
❏ Total Users: ${allUsers.length}
❏ Time: ${time}
❏ Bot Running: ${uptimeString}
❏ Bot's Speed: ${result} MBPS
=====================`;

    const attachment = await global.utils.getStreamFromURL(link);
    message.reply({
      body: replyMessage,
      attachment
    });
  },

  onChat: async function({ api, message, event, usersData, threadsData  }) {
    try {
      const lowerCaseBody = event.body.toLowerCase();

      if (lowerCaseBody === "info" || lowerCaseBody.startsWith("{p}info")) {
        await this.onStart({ api, message, event, usersData, threadsData });
      }
  } catch(error){
  console.error(error);
      message.reply(error);
  }
  }
};

function formatUptime(uptime) {
  const seconds = Math.floor(uptime % 60);
  const minutes = Math.floor((uptime / 60) % 60);
  const hours = Math.floor((uptime / (60 * 60)) % 24);
  const days = Math.floor(uptime / (60 * 60 * 24));

  const uptimeString = [];
  if (days > 0) uptimeString.push(`${days}d`);
  if (hours > 0) uptimeString.push(`${hours}h`);
  if (minutes > 0) uptimeString.push(`${minutes}min`);
  if (seconds > 0) uptimeString.push(`${seconds}sec`);

  return uptimeString.join(" ");
}
