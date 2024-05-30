const fs = require("fs");
module.exports.config = {
	name: "amibusy",
prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	category: "no prefix",
	usages: "🤣",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("voiceck")==0 || event.body.indexOf("bot er malik kui")==0 || event.body.indexOf("@Crush King")==0 || event.body.indexOf("onik")==0) {
		var msg = {
				body: "~ আমি এখন ব্যস্ত আছি যা বলার আমার রোবটকে বলো..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/amiekonbg.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😫", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
