const axios = require("axios");
const fs = require('fs-extra');
const yts = require("yt-search");
const baseApiUrl = async () => {
  const base = await axios.get(
`https://raw.githubusercontent.com/Blankid018/D1PT0/main/baseApiUrl.json`,
  );
  return base.data.api;
};

module.exports = {
  config: {
    name: "sing2",
    aliases: ['music2', 'play2'],
    version: "1.0",
    role: 0,
    author: "ASIF",
    countDown: 0,
    description: "download music from YouTube",
    category: "media",
    guide: "{pn} <MusicName>",
  },

  onStart: async ({ api, event, args, message }) => {
    const keyWord = args.join(" ");
    if(!keyWord){
      return message.reply("Please provide a song name.");
    }else{
      try {
        const searchResults = await yts(keyWord);
        const r = Math.floor(Math.random() * 3);
        const musicUrl = searchResults.videos[r].url;
        const idvideo = musicUrl.split('v=')[1];
    const { data: { title, downloadLink, quality} } = await axios.get(`${await baseApiUrl()}/ytDl3?link=${idvideo}&format=mp3`);
          await  api.sendMessage({
            body: `• Title: ${title}\n• Quality: ${quality}`,
            attachment: await dipto(downloadLink,'audio.mp3')
          },event.threadID,
         ()=>fs.unlinkSync('audio.mp3'), event.messageID);
} catch(error){
        console.log(error)
        message.reply("An error occured while searching for the song.");
}
    async function dipto(url, pathName) {
      try {
        const response = (await axios.get(url,{
          responseType: "arraybuffer"
        })).data;

        fs.writeFileSync(pathName, Buffer.from(response));
        return fs.createReadStream(pathName);
      }
      catch (err) {
        throw err;
      }
    }
  }
}
}
