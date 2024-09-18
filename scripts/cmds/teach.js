const axios = require("axios");

module.exports = {
	config: {
		name: "teach",
		aliases: ["simteach"],
		version: "1.0",
		author: "KENLIEPLAYS",
		countDown: 5,
		role: 0,
		description: {
			en: "𝗧𝗲𝗮𝗰𝗵 𝘆𝗼𝘂𝗿 𝘀𝗶𝗺"
		},
		category: "𝗔𝗜",
		guide:{
			en: "{pn} [your ask] - [my answer]"
		}
	},
	onStart: async function ({ api, event, args, message }) {
		try{
		const [q, answer] = args.join(" ").split("-").map(item => item.trim());
			if (!args[0]) {
				return api.sendMessage("❎ | 𝚄𝚜𝚎 -𝚝𝚎𝚊𝚌𝚑 [𝚢𝚘𝚞𝚛 𝚊𝚜𝚔] - [𝚂𝚒𝚖 𝚛𝚎𝚜𝚙𝚘𝚗𝚍]", event.threadID, event.messageID);
			}
			const { data } = await axios.get(`${global.api.asif}/sim/teach?ask=${encodeURIComponent(q)}&ans=${encodeURIComponent(answer)}`);
		if(data){
		const formattedResponseMessage = `✅ | 𝗧𝗲𝗮𝗰𝗵𝗶𝗻𝗴 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 <😘\n\n𝚈𝚘𝚞𝚛 𝙰𝚜𝚔: ${data.data.ask}\n𝚂𝚒𝚖 𝙰𝚗𝚜𝚠𝚎𝚛: ${data.data.ans}`;
		await message.reply(formattedResponseMessage);
		}
		}catch(err){
			console.error(err);
			api.sendMessage(`𝙴𝚛𝚛𝚘𝚛: ${err.message}`, event.threadID, event.messageID);
		}
	}
};