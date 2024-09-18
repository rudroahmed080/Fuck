const axios = require('axios');
const path = require('path');
const fs = require('fs');

module.exports = {
  config: {
  name: "album2",
  version: "1.0.0",
  role: 0,
  author: "Dipto",//Don't Change Author name.
  description: "Displays album options for selection.",
  category: "𝗠𝗘𝗗𝗜𝗔",
  countDown: 5,
  guide: {
      en: "{p}{n} or {p}{n} [2] or {p}{n} add [cartoon/photo/lofi/sad/islamic/funny/horny/anime]"
}
},

onStart:async function ({ api, event, args}) {
  if (!args[0]){
    { api.setMessageReaction("1️⃣", event.messageID, (err) => {}, true);
    }
  const albumOptions = [
     "𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
     "𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼",
     "𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼",
     "𝗔𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼",
     "𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼",
     "𝗟𝗼𝗙𝗶 𝗩𝗶𝗱𝗲𝗼",
     "𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼",
     "𝗖𝗼𝘂𝗽𝗹𝗲 𝗩𝗶𝗱𝗲𝗼",
     "𝗙𝗹𝗼𝘄𝗲𝗿 𝗩𝗶𝗱𝗲𝗼",
     "𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼"
  ];
  const message = "❤‍🩹 𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗕𝗮𝗯𝘆 <💝\n"+"✿━━━━━━━━━━━━━━━━━━━━━━━✿\n"+ albumOptions.map((option, index) => `☂ | ${index + 1}. ${option} 📛`).join("\n")+"\n✿━━━━━━━━━━━━━━━━━━━━━━━✿\n"+"🔰 | 𝐏𝐚𝐠𝐞 [ 𝟏/𝟐 ]"+"\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";
  const imgUrls = [
    'https://i.imgur.com/OUnbHyJ.png',
    'https://i.imgur.com/rdedzzN.jpeg',
    'https://i.imgur.com/6gJtPnD.png',
    'https://i.imgur.com/0EB06ik.png'
  ];
  const Url = imgUrls[Math.floor(Math.random() * imgUrls.length)];
  const attachment = await global.utils.getStreamFromURL(Url);
  await api.sendMessage({ body: message, attachment }, event.threadID,(error, info) => {
  global.GoatBot.onReply.set(info.messageID,{
    commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: albumOptions
  })},event.messageID);
}else if (args[0] === "2"){
    { api.setMessageReaction("2️⃣", event.messageID, (err) => {}, true);
    }
  const albumOptions = [
    "𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼",
    "𝗦𝗶𝗴𝗺𝗮 𝗥𝘂𝗹𝗲",
    "𝗟𝘆𝗿𝗶𝗰𝘀 𝗩𝗶𝗱𝗲𝗼",
    "𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼",
    "𝟏𝟖+ 𝘃𝗶𝗱𝗲𝗼",
    "𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝘃𝗶𝗱𝗲𝗼",
    "𝗙𝗼𝗼𝘁𝗕𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼",
    "𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼",
    "𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝗩𝗶𝗱𝗲𝗼"
  ];
    const message = "❤‍🩹 𝗖𝗵𝗼𝗼𝘀𝗲 𝗮𝗻 𝗼𝗽𝘁𝗶𝗼𝗻𝘀 𝗕𝗮𝗯𝘆 <💝\n"+"✿━━━━━━━━━━━━━━━━━━━━━━━✿\n"+ albumOptions.map((option, index) => `☂ | ${index + 11}. ${option} 📛`).join("\n")+"\n✿━━━━━━━━━━━━━━━━━━━━━━━✿\n"+"🔰 | 𝐏𝐚𝐠𝐞 [ 𝟐/𝟐 ]"+"\n✿━━━━━━━━━━━━━━━━━━━━━━━✿";
    const imgUrls = [
      'https://i.imgur.com/OUnbHyJ.png',
      'https://i.imgur.com/rdedzzN.jpeg',
      'https://i.imgur.com/6gJtPnD.png',
      'https://i.imgur.com/0EB06ik.png'
    ];
    const Url = imgUrls[Math.floor(Math.random() * imgUrls.length)];
    const attachment = await global.utils.getStreamFromURL(Url);
    await api.sendMessage({ body: message, attachment }, event.threadID,(error, info) => {
    global.GoatBot.onReply.set(info.messageID,{
    commandName: this.config.name,
    type: 'reply',
    messageID: info.messageID,
    author: event.senderID,
    link: albumOptions
  })},event.messageID);
  }
//------------Video Add--------------//
const validCommands = ['cartoon', 'photo', 'lofi', 'sad', 'islamic','funny','horny','anime','love','baby','lyrics','sigma','photo','aesthetic','cat','flower','ff','sex','girl','football',"friend"];
  { api.setMessageReaction("👀", event.messageID, (err) => {}, true);
  }
  if (args[0] === 'list'){
 try {
   const lRes = await axios.get(`${global.GoatBot.config.API.ASIF}/album?list=ASIF`);
const data = lRes.data;
     api.sendMessage({
        body: `${data.list}`,
        attachment: await global.utils.getStreamFromURL('https://i.ibb.co/tM8ds05/image.jpg')
      }, event.threadID, event.messageID);
 } catch (error) {
api.sendMessage(`${error}`,event.threadID,event.messageID)
 }
  }
const d1 = args[1]?args[1].toLowerCase() : '' ;
 if (!d1 || !validCommands.includes(d1))return;
    if (!event.messageReply || !event.messageReply.attachments) return;
    const attachment = event.messageReply.attachments[0].url;
    const URL = attachment;
    let query;
    switch (d1) {
        case 'cartoon':
            query = 'addCartoon';
            break;
        case 'lofi':
            query = 'addLofi';
            break;
        case 'sad':
            query = 'addSad';
            break;
        case 'funny':
            query = 'addFunny';
            break;
        case 'islamic':
            query = 'addIslamic';
            break;
        case 'horny':
            query = 'addHorny';
            break;
        case 'anime':
            query = 'addAnime';
            break;
        case 'love':
            query = 'addLove';
            break;
        case 'lyrics':
            query = 'addLyrics';
            break;
        case 'cricket':
            query = 'addCricket';
            break;
        case 'photo':
            query = 'addPhoto';
            break;
        case 'sigma':
            query = 'addSigma';
            break;
        case 'aesthetic':
            query = 'addAesthetic';
            break;
        case 'cat':
            query = 'addCat';
            break;
        case 'ff':
            query = 'addFF';
            break;
        case 'sex':
            query = 'addSex';
            break;
        case 'football':
            query = 'addFootball';
            break;
        case 'girl':
            query = 'addGirl';
            break;
        case 'friend':
            query = 'addFriends';
            break;
        default:
            break;
    }
    try {
        const response = await axios.get(`${global.GoatBot.config.API.ASIF}/imgur?link=${encodeURIComponent(URL)}`);
        const imgurLink = response.data.uploaded.image;
        const fileExtension = path.extname(imgurLink);
   let query2;
        if (fileExtension === '.jpg' || fileExtension === '.jpeg' || fileExtension === '.png') {query2 = 'addPhoto';} 
else if (fileExtension === '.mp4') {
  query2 = query;} else {
            api.sendMessage('Invalid file format.', event.threadID, event.messageID);
            return;
        }
        const svRes = await axios.get(`${global.GoatBot.config.API.ASIF}/album?${query2}=${imgurLink}`);
const data = svRes.data;
     //   console.log(data);
        api.sendMessage(`✅ | ${data.data}\n\n🔰 | ${data.data2}`, event.threadID, event.messageID);
    } catch (error) {console.error('❎ | Error:', error);api.sendMessage(`❎ | Failed to convert image.\n${error}`, event.threadID, event.messageID);
}
},
onReply: async function ({ api, event, Reply }) {
        const admin = global.GoatBot.config.DEV;
        api.unsendMessage(Reply.messageID);
        if (event.type == "message_reply") {
        const reply = parseInt(event.body);
        if (isNaN(reply)) {
    return api.sendMessage("🔰 | 𝐏𝐥𝐞𝐚𝐬𝐞 𝐫𝐞𝐩𝐥𝐲 𝐰𝐢𝐭𝐡 𝐞𝐢𝐭𝐡𝐞𝐫 𝟏 - 𝟏𝟗", event.threadID, event.messageID);
  }
  let query;
  let cp;
  if (reply === 1) {
    query = "funnyVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝘂𝗻𝗻𝘆 𝘃𝗶𝗱𝗲𝗼 <🤣";
  } else if (reply === 2) {
    query = "islamicVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝘃𝗶𝗱𝗲𝗼 <😇";
  }else if (reply === 3) {
      query = "sadVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗮𝗱 𝘃𝗶𝗱𝗲𝗼 <🥺";
    }else if (reply === 4) {
      query = "animeVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗮𝗻𝗶𝗺𝗲 𝘃𝗶𝗱𝗲𝗼 <😘";
    }else if (reply === 5) {
      query = "cartoonVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝗮𝗿𝘁𝗼𝗼𝗻 𝘃𝗶𝗱𝗲𝗼 <😇";
    }else if (reply === 6) {
      query = "lofiVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝗼𝗳𝗶 𝘃𝗶𝗱𝗲𝗼 <😇";
    }
    else if (reply === 7 && event.senderID === admin) {
    query = "hornyVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗛𝗼𝗿𝗻𝘆 𝘃𝗶𝗱𝗲𝗼 <🥵";
    }
    else if (reply === 8) {
    query = "loveVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝗼𝘃𝗲 𝘃𝗶𝗱𝗲𝗼 <😍";
    }
    else if (reply === 9) {
    query = "babyVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝘂𝘁𝗲 𝗕𝗮𝗯𝘆 𝘃𝗶𝗱𝗲𝗼 <🧑‍🍼";
    }
    else if (reply === 10) {
    query = "photo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗥𝗮𝗻𝗱𝗼𝗺 𝗣𝗵𝗼𝘁𝗼 <😙";
      }
    else if (reply === 11) {
    query = "aestheticVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗔𝗲𝘀𝘁𝗵𝗲𝘁𝗶𝗰 𝗩𝗶𝗱𝗲𝗼 <😙";
    }
    else if (reply === 12) {
    query = "sigmaVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗶𝗴𝗺𝗮 𝘃𝗶𝗱𝗲𝗼 <🐥";
    }
    else if (reply === 13) {
    query = "lyricsVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗟𝘆𝗿𝗶𝗰𝘀 𝘃𝗶𝗱𝗲𝗼 <🥰";
    }
    else if (reply === 14) {
    query = "catVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗖𝗮𝘁 𝗩𝗶𝗱𝗲𝗼 <😙";
    }
  else if (reply === 15 && event.senderID === admin) {
    query = "sexVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗦𝗲𝘅 𝘃𝗶𝗱𝗲𝗼 <😙";
  }
  else if (reply === 16) {
      query = "ffVideo";
      cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗿𝗲𝗲 𝗙𝗶𝗿𝗲 𝗩𝗶𝗱𝗲𝗼 <😙";
  }
    else if (reply === 17) {
    query = "footballVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗼𝗼𝘁𝗯𝗮𝗹𝗹 𝘃𝗶𝗱𝗲𝗼 <😙";
    }
    else if (reply === 18) {
    query = "girlVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗚𝗶𝗿𝗹 𝘃𝗶𝗱𝗲𝗼 <😙";
    }
    else if (reply === 19) {
    query = "friendsVideo";
    cp = "𝗡𝗮𝘄 𝗕𝗮𝗯𝘆 𝗙𝗿𝗶𝗲𝗻𝗱𝘀 𝘃𝗶𝗱𝗲𝗼 <😙";
    }
  try {
    const res = await axios.get(`https://album-api-6rp3.onrender.com/album?${query}=Asif`);
    const imgUrl = res.data.url;
    const ex = path.extname(imgUrl);
    const imgRes = await axios.get(imgUrl, { responseType: 'arraybuffer' });
    const filename = __dirname + `/assets/4s1f${ex}`;
    fs.writeFileSync(filename, Buffer.from(imgRes.data, 'binary'));
    api.sendMessage({
        body: cp,
        attachment: fs.createReadStream(filename),
      },
      event.threadID,
      () => fs.unlinkSync(filename), event.messageID);
  } catch (error) {
    api.sendMessage('❎ | An error occurred while fetching the media.', event.threadID, event.messageID);
   }
  }
 }
};