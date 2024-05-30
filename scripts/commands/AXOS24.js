const fs = require("fs");
module.exports.config = {
	name: "🔴",
	prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	category: "no prefix",
	usages: "ki koro",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("voiceckanik")==0 || event.body.indexOf("Amogus")==0 || event.body.indexOf("Ki koro")==0 ||
event.body.indexOf("Ki kro")==0 ||     event.body.indexOf("Bot ki koro")==0 || 
event.body.indexOf("কি করো")==0) {
		var msg = {
				body: "~ এইতো তোমাদের সাথে আড্ডা দিচ্ছি, তোমরা কি করছো 🥰🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/kothabolsi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
