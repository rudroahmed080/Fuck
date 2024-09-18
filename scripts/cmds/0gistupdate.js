const request = require('request');

const axios = require('axios');

module.exports.config = {
    name: "updategist",
    aliases: ["ugist", "editgist"],
    version: "2.0",
    author: "ASIF",
    countDown: 3,
    role: 0,
    description: {
        en: "Gist Update"
    },
    guide: "{pn} --filename [fileName] --gistid [gistId] --description [description]",
    category: "OWNER"
};

module.exports.onStart = async function({ api, message, event, args }) {
    try {
      let updatedFileName = ""; // Default updated file name
      let gistId = ""; // Default gist ID
      let updatedDescription = "No Description Provided"; // Default updated description
      let updatedCode = event.messageReply.body; // Default updated code
      let token = "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"; // Default token
      let name = 'code.js'
      // .ugist --filename test2.js --gistid 59370b7f14af7cb321a2466cd30adb21#file-test-js --description Hey H4X☠️ 
      for (let i = 0; i < args.length; i += 2) {
          switch (args[i]) {
              case "--filename":
                  updatedFileName = args[i + 1];
                  break;
              case "--gistid":
                  gistId = args[i + 1];
                  break;
              case "--description":
                  updatedDescription = args[i + 1];
                  break;
              case "--code":
                  updatedCode = args[i + 1];
                  break;
              case "--token":
                  token = args[i + 1];
                  break;
              case "--newFile":
                   name = args[i + 1];
                  break;
          }
      }

        if (!gistId || !updatedCode) {
            return message.reply("❎ | 𝗣𝗹𝗲𝗮𝘀𝗲 𝗽𝗿𝗼𝘃𝗶𝗱𝗲 𝗯𝗼𝘁𝗵 𝗴𝗶𝘀𝘁 𝗜𝗗 𝗮𝗻𝗱 𝘂𝗽𝗱𝗮𝘁𝗲𝗱 𝗰𝗼𝗱𝗲.");  
        }

        const tokenToUse = token;

        const data = {
          description: updatedDescription,
          files: {}
          };
      if (updatedFileName) {
        data.files[updatedFileName] = {};
      }

      if (updatedCode) {
        data.files[updatedFileName] = { content: updatedCode, filename: updatedFileName };
      }
      if (name && event.type == "message_reply") {
        data.files[''] = { content: updatedCode, filename: name }; 
      }
        const response = await axios.patch(`https://api.github.com/gists/${gistId}`, data, {
            headers: {
                'Authorization': `token ${tokenToUse}`,
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            const rawUrls = [];
            for (const file of Object.values(response.data.files)) {
            rawUrls.push(file.raw_url);
          }
            const formattedUrls = rawUrls.map((url, index) => `👻 | ${index + 1}. ${url}`).join('\n');

            await message.reply({
                body: `
                ✅ | Code Updated Successfully <😘
                ☠️ | Updated RawUrls ► ${formattedUrls}
                💀 | HTML Url: ${response.data.html_url}
                ☂️ | Author: ASIF
                `
            });
        } else {
            throw new Error(`Failed to update gist. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error updating gist:', error.message);
        return message.reply('Failed to update gist. Please try again later. :)');
    }
};
