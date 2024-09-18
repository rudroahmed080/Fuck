function formatFont(text) {
  const fontMapping = {
    a: "𝚊", b: "𝚋", c: "𝚌", d: "𝚍", e: "𝚎", f: "𝚏", g: "𝚐", h: "𝚑", i: "𝚒", j: "𝚓", k: "𝚔", l: "𝚕", m: "𝚖",
    n: "𝚗", o: "𝚘", p: "𝚙", q: "𝚚", r: "𝚛", s: "𝚜", t: "𝚝", u: "𝚞", v: "𝚟", w: "𝚠", x: "𝚡", y: "𝚢", z: "𝚣",
    A: "𝙰", B: "𝙱", C: "𝙲", D: "𝙳", E: "𝙴", F: "𝙵", G: "𝙶", H: "𝙷", I: "𝙸", J: "𝙹", K: "𝙺", L: "𝙻", M: "𝙼",
    N: "𝙽", O: "𝙾", P: "𝙿", Q: "𝚀", R: "𝚁", S: "𝚂", T: "𝚃", U: "𝚄", V: "𝚅", W: "𝚆", X: "𝚇", Y: "𝚈", Z: "𝚉"
  };

  let formattedText = "";
  for (const char of text) {
    if (char in fontMapping) {
      formattedText += fontMapping[char];
    } else {
      formattedText += char;
    }
  }

  return formattedText;
}
const cron = require('node-cron');
const axios = require("axios");
const request = require('request');
const fs = require("fs");

const activeThreads = {};

module.exports = {
	config: {
		name: "shoticron2",
		author: "who is tokodori", // Convert To Goat By Tokodori
		role: 2,
		description: {
      en: "𝗦𝗲𝗻𝗱 𝘁𝗶𝗸𝘁𝗼𝗸 𝘃𝗶𝗱𝗲𝗼 𝗲𝘃𝗲𝗿𝘆 30 𝗺𝗶𝗻𝘂𝘁𝗲𝘀"
    },
		category: "𝗠𝗘𝗗𝗜𝗔",
		guide: "{pn}"
	},
	onStart: async function({api, event, input}) {
		const args = event.body.split(" ");
		const threadID = event.threadID;

		if (args[1] === "on") {
			if (!activeThreads[threadID]) {
				activeThreads[threadID] = true;
				api.sendMessage(formatFont(`✅ | Automatic sending of videos is now enable.`, event.threadID));
				cron.schedule('*/30 * * * *', async () => {
					try {
						if (activeThreads[threadID]) {
							let response = await axios.post(
								"https://api--v1-shoti.vercel.app/api/v1/get",
								{
									apikey: "$shoti-1hfdaljvdsfauofg7j",
								}
							);
							var file = fs.createWriteStream(__dirname + "/cache/shoti.mp4");
							const userInfo = response.data.data.user;
							const username = userInfo.username;
							const nickname = userInfo.nickname;
							const tid = event.threadID;
							var rqs = request(encodeURI(response.data.data.url));
							rqs.pipe(file);
							file.on('finish', () => {
								api.sendMessage(
									{
										body: formatFont(`Username: @${username}\nNickname: ${nickname}\nTid: ${tid}`),
										attachment: fs.createReadStream(__dirname + '/cache/shoti.mp4')
									}, threadID, (error, info) => {
										if (!error) {
											fs.unlinkSync(__dirname + '/cache/shoti.mp4');
										}
									});
							});
						}
					} catch (error) {
						console.error('Error:', error);
					}
				});
			} else {
				api.sendMessage("✅ | Automatic sending of videos is already ON in this thread.", threadID);
			}
		} else if (args[1] === "off") {
			if (activeThreads[threadID]) {
				activeThreads[threadID] = false;
				api.sendMessage(formatFont(`❎ | Automatic sending of videos is now disable.`, threadID));
			} else {
				api.sendMessage(formatFont("❎ | Automatic sending of videos is already OFF in this thread.", threadID));
			}
		}
	}
};