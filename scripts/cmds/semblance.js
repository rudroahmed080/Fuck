const axios = require("axios");

module.exports = {
	config: {
		name: "ai2",
		version: "1.0",
		author: "𝐀𝐒𝐈𝐅 𝐱𝟔𝟗",
		countDown: 5,
		role: 0,
    description: "Open Ai Gpt",
		category: "Ai"
	},

	onStart: async function({ message, event, args, commandName, usersData}) {
		const userID = event.senderID;
		const data = await usersData.get(userID);
	    const prompt = args.join(" ");

				if (prompt.toLowerCase() === "clear") {
					global.GoatBot.onReply.delete(message.messageID);
					message.reply("Previous conversation has been cleared.");
					return;
				}

				try {
					const waitingQue = await message.reply("🔍");
					const response = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${prompt}&uid=${userID}`);

					message.reply({ body: `${response.data.gpt4}`}, async (err, info) => {
	await message.unsend((await waitingQue).messageID);
	global.GoatBot.onReply.set(info.messageID, {
		commandName,
		messageID: info.messageID,
		author: event.senderID
	});
});


				} catch (error) {
					console.error("Error:", error.message);
				}
	},
	onReply: async function({message, event, Reply, args, api}) {
		let {author, commandName} = Reply;
		if (event.senderID != author) return;
		const prompt = args.join(" ");
		if (prompt.toLowerCase() === "clear") {
			global.GoatBot.onReply.delete(message.messageID);
			message.reply("Previous conversation has been cleared.");
			return;
		}
		try {
			api.setMessageReaction("🤖", event.messageID, event.threadID, api);
			const response = await axios.get(`https://ai-tools.replit.app/gpt?prompt=${prompt}&uid=${userID}`);
						message.reply({ body: `${response.data.gpt4}`}, (err, info) => {
			global.GoatBot.onReply.set(info.messageID, {
				commandName,
				messageID: info.messageID,
				author: event.senderID
			});
		 });

		} catch (error) {
			console.error("Error:", error.message);
		}
	}
};