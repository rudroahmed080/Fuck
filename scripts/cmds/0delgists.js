const axios = require('axios');

module.exports.config = {
    name: "delgist",
    aliases: ["dgist", "deletegist"],
    version: "2.0",
    author: "ASIF",
    countDown: 3,
    role: 0,
    description: {
        en: "𝗗𝗲𝗹𝗲𝘁𝗲 𝗚𝗶𝘀𝘁𝘀 𝗙𝗿𝗼𝗺 𝗚𝗶𝘀𝘁𝗕𝗶𝗻"
    },
    category: "𝗧𝗢𝗢𝗟𝗦",
    guide: {
        en: '{pn} [gistId | githubToken]'
    }
};

module.exports.onStart = async function({ api, message, event, args }) {
    try {
        const [gistId, githubToken] = (args.join(' ')).split('|').map(item => item.trim());

        if (!gistId || !githubToken) {
            return message.reply('❎ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗯𝗼𝘁𝗵 𝗴𝗶𝘀𝘁 𝗜𝗗 𝗮𝗻𝗱 𝗚𝗶𝘁𝗛𝘂𝗯 𝘁𝗼𝗸𝗲𝗻 𝘁𝗼 𝗱𝗲𝗹𝗲𝘁𝗲.');
        }

        const response = await axios.delete(`https://api.github.com/gists/${gistId}`, {
            headers: {
                'Authorization': `token ${githubToken}`
            }
        });

        if (response.status === 204) {
            const deletedBy = event.senderID === global.GoatBot.config.DEV ?  '𝗬𝗼𝘂' : '𝗔𝗦𝗜𝗙';
            const body = `✅ | 𝗚𝗶𝘀𝘁 𝗱𝗲𝗹𝗲𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆\n☂️ | 𝗗𝗲𝗹𝗲𝘁𝗲𝗱 𝗕𝘆 ${deletedBy}`;
            await message.reply({ body });
        } else {
            throw new Error(`❎ | 𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗱𝗲𝗹𝗲𝘁𝗲 𝗴𝗶𝘀𝘁.\n𝗦𝘁𝗮𝘁𝘂𝘀: ${response.status}`);
        }
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return message.reply('❎ | 𝗚𝗶𝘀𝘁 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱. 𝗣𝗹𝗲𝗮𝘀𝗲 𝗰𝗵𝗲𝗰𝗸 𝘁𝗵𝗲 𝗴𝗶𝘀𝘁 𝗜𝗗.');
        }
        console.error('Error deleting gist:', error.message);
        return message.reply('❎ | 𝗙𝗮𝗶𝗹𝗲𝗱 𝘁𝗼 𝗱𝗲𝗹𝗲𝘁𝗲 𝗴𝗶𝘀𝘁. 𝗣𝗹𝗲𝗮𝘀𝗲 𝘁𝗿𝘆 𝗮𝗴𝗮𝗶𝗻 𝗹𝗮𝘁𝗲𝗿.');
    }
};
