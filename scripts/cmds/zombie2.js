const axios = require("axios");

module.exports.config = {
  name: "zombie",
  aliases: ["zom"],
  author: "ASIF",
  role: 2,
  premium: true,
  description: "Convert normal image to zombie.",
  category: "owner",
  countDown: 10,
  guide: {
    en: "{pn} [reply to image]",
  },
};

module.exports.onStart = async ({ event, message }) => {
  try {
    const imgUrl =
      event.type === "message_reply"
        ? event.messageReply.attachments[0].url
        : args[0];
    if (!imgUrl) {
      return message.style("Please reply to an image.");
    }
    message.style("Wait bby <😘");
    const { url } = (await axios.get('https://www.nubs-apis.000.pe/dipto/imgbb?url=' + encodeURIComponent(imgUrl))).data.data;
    const response = await axios.get(
      "https://www.nubs-apis.000.pe/zombie?imageUrl=" + url
    );
    message.reply({
      body: "Here's Your Image <😘",
      attachment: await global.utils.getStreamFromURL(response.data.imageUrl),
    });
  } catch (error) {
    console.log(error);
    message.style(`Error: ${error.message}`);
  }
};
