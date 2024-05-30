const fs = require("fs");
module.exports.config = {
  name: "🌃",
  prefix: true,
    version: "1.0.1",
  permssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  category: "no prefix",
  usages: "🌃",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("voiceck")==0 || event.body.indexOf("শুভো রাত্রি")==0 || event.body.indexOf("Good night")==0 || event.body.indexOf("gd n8")==0) {
    var msg = {
        body: "~ ঘুমাবা নাকি জান, আচ্ছা ঘুমিয়ে পরো, সকাল এ কথা হবে, শুভ রাত্রি..!!",
        attachment: fs.createReadStream(__dirname + `/noprefix/goodnight.mp3`)
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥱", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
