const axios = require('axios');

module.exports.config = {
    name: "blloaninfo",
    version: "1.0",
    author: "ASIF",
    countDown: 1,
    role: 0,
    description: "𝗕𝗮𝗻𝗴𝗹𝗮𝗹𝗶𝗻𝗸 𝗹𝗼𝗮𝗻 𝗶𝗻𝗳𝗼",
    category: "𝗨𝗧𝗜𝗟𝗜𝗧𝗬",
    guide: "{pn} [number]",
};

module.exports.onStart = async function({ api, event, args }) {
    const num = args[0];
    try{
    var banglalinkRegex = /^(014|019)\d{8}$/;
    if (!banglalinkRegex.test(num)) {
      api.sendMessage('❎ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗲𝗻𝘁𝗲𝗿 𝗮 𝘃𝗮𝗹𝗶𝗱 𝗕𝗮𝗻𝗴𝗹𝗮𝗹𝗶𝗻𝗸 𝗻𝘂𝗺𝗯𝗲𝗿 𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝘄𝗶𝘁𝗵 014 𝗼𝗿 019', event.threadID, event.messageID);
      return;
    }
    else if(banglalinkRegex.test(num)){
        const { data } = await axios.get(`https://sms-bomb.vercel.app/api/loan.php?phone=${encodeURIComponent(num)}`);
        const status = data.status || 'No Data';
        const statusCode = data.status_code || 'No Data';
        const message = data.message || 'No Data';
        const info = data.data;

        api.sendMessage({
            body: ` 
🍂 | 𝗟𝗢𝗔𝗡 𝗜𝗡𝗙𝗢 𝗙𝗢𝗥 ► ${num}
————–——————————–————
  ◆ 𝚂𝚃𝙰𝚃𝚄𝚂: ${status}

  ◆ 𝚂𝚃𝙰𝚃𝚄𝚂 𝙲𝙾𝙳𝙴: ${statusCode}

  ◆ 𝙼𝙴𝚂𝚂𝙰𝙶𝙴: ${message}

  ◆ 𝙸𝙽𝙵𝙾: ${info}
`
        }, event.threadID, event.messageID);
    }

    } catch(err){
        console.log(err);
        api.sendMessage('❎ | 𝙴𝚛𝚛𝚘𝚛: ' + err, event.messageID, event.messageID);
    }
};