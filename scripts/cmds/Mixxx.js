const rubishapi = global.GoatBot.config.rubishapi;

module.exports = {
  config: {
    name: "emojimix",
    aliases: ["em", "emix"],
    version: "1.5",
    author: "Samir Œ | RUBISH",
    countDown: 5,
    role: 0,
    shortDescription: "Mix 2 emojis together and create a unique combination",
    longDescription: "Mix 2 emojis together and create a unique combination. Express yourself with a custom emoji mix!",
    guide: {
      en: "   {pn} <emoji1> <emoji2>"
        + "\n   Example:  {pn} 🤣 🥰"
    },
    category: "General"
  },

  onStart: async function ({ message, args, getLang }) {
    let [emoji1, emoji2] = args.join('').match(/([\uD800-\uDBFF][\uDC00-\uDFFF])/g) || [];

    if (!emoji1 || !emoji2) {
      return message.reply("⚠️ | Please enter two emojis for mixing. \n\nExample: .emojimix 🤣 🥰");
    }

    try {
      const emoji1Encoded = encodeURIComponent(emoji1);
      const emoji2Encoded = encodeURIComponent(emoji2);
      const url = `${rubishapi}/emojimix?emoji1=${emoji1Encoded}&emoji2=${emoji2Encoded}&apikey=rubish69`;

      const emojimix = await global.utils.getStreamFromUrl(url);

      if (!emojimix) {
        return message.reply(`⚠️ | Sorry, emojis ${emoji1} and ${emoji2} can't be mixed`);
      }

      const image = [emojimix];

      message.reply({
        body: `✅ | Successfully mixed emojis ${emoji1} and ${emoji2}!`,
        attachment: image
      });
    } catch (err) {
      console.error(err);
      message.reply(`⚠️ | Sorry, emojis ${emoji1} and ${emoji2} can't be mixed`);
    }
  }
};
