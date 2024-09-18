const axios = require('axios');
const fs = require('fs');
const apiUrl = 'https://4s1f-api.replit.app/gist';

module.exports = {
    config: {
        name: "gist3",
        aliases: ["gistbin"],
        version: "2.0",
        author: "ASIF",
        countDown: 3,
        role: 0,
        description: {
            en: "𝗖𝗿𝗲𝗮𝘁𝗲 𝗚𝗶𝘀𝘁𝘀"
        },
        category: "𝗢𝗪𝗡𝗘𝗥",
        guide: {
            en: '{pn} [fileName] --visibility [value] --description [value]'
              + '\n{pn} create [fileName] --visibility [value] --description [value] && [Must Reply To Code]'
        }
    },

    onStart: async function ({ api, args, message, event }) {
        const info = args.join(' ');
        const permission = global.GoatBot.config.DEV;
        if (!permission.includes(event.senderID)) {
          api.sendMessage(info, event.threadID, event.messageID);
          return;
        }
        if (!args[0]) {
            return api.sendMessage('❎ | 𝙿𝚕𝚎𝚊𝚜𝚎 𝚕𝚎𝚊𝚛𝚗 𝚑𝚘𝚠 𝚝𝚘 𝚞𝚜𝚎 -𝚑𝚎𝚕𝚙 <𝚐𝚒𝚜𝚝𝚋𝚒𝚗>', event.threadID, event.messageID);
          }
      try {
        let fileName = ""; // Default file name
        let description = "No descriptions provided"; // Default description
        let visibility = "private"; // Default visibility
        let code = '';
        const fileName2 = args[0];
        const path = `scripts/cmds/${fileName2}.js`;
        if(event.type === "message_reply" && event.messageReply.body){
          code = event.messageReply.body;
        }else {
           code = await fs.promises.readFile(path, 'utf-8');
        }

        for (let i = 0; i < args.length; i += 2) {
            const option = args[i];
            const value = args[i + 1];

            switch (option) {
                case "create":
                    fileName = value;
                    break;
                case "--description":
                    description = value;
                    break;
                case "--visibility":
                    visibility = value;
                    break;
            }
        }

        const fileData = {
            code: encodeURIComponent(code),
            filename: fileName || fileName2,
            token: "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",
            visibility: visibility,
            description: encodeURIComponent(description)
        };

        const res = await axios.post(`${apiUrl}/create`, fileData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const raw = res.data.data.rawUrl;
        await api.sendMessage(raw, event.threadID, event.messageID);
      } catch (error) {
        console.error('Error creating gist:', error.message);
        await api.sendMessage('❎ | 𝙵𝚊𝚒𝚕𝚎𝚍 𝚝𝚘 𝚌𝚛𝚎𝚊𝚝𝚎 𝚐𝚒𝚜𝚝. 𝙿𝚕𝚎𝚊𝚜𝚎 𝚝𝚛𝚢 𝚊𝚐𝚊𝚒𝚗 𝚕𝚊𝚝𝚎𝚛. :)', event.threadID, event.messageID);
      }
    }
};
































// if(subCommand === 'collect') {
//                    const collectName = subCommand; 
//                    const filePath = `${collectName}.js`;

//                     codeData = await fs.promises.readFile(filePath, "utf-8");
//                    const postData = {
//                      code: encodeURIComponent(codeData),
//                      filename: `${collectName}.js`,
//                      visibility: "private"
//                    };

//                    const response = await axios.post(`${apiUrl}/create`, postData, {
//                      headers: {
//                        'Content-Type': 'application/json'
//                      }
//                    });

//                    const file2 = response.data.data.rawUrl;
//                   await message.reply(file2);
//                }
//           } catch (error) {
//             console.error(error);
//             message.reply('❎ | ' + error.message);
//           }
//     }
// };
