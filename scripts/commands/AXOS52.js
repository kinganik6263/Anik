const fs = require("fs");
module.exports.config = {
	name: "uporey",
prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "🙄",
	category: "no prefix",
	usages: "🙄",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("voiceck")==0 || event.body.indexOf("🙄")==0) {
		var msg = {
				body: "ও্ঁই্ঁ বে্ঁটা্ উ্ঁপ্ঁরে্ঁ কি্ঁ দে্ঁখ্ঁস্ঁ আ্ঁমি্ঁ এ্ঁই্ঁ দি্ঁকে্ঁ 😚🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/upray.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
