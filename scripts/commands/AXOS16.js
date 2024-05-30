const fs = require("fs");
module.exports.config = {
	name: "🙋‍♂️",
	prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	category: "no prefix",
	usages: "🙋‍♂️",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("voiceckanik")==0 || event.body.indexOf("ওই")==0 || event.body.indexOf("oi")==0 || event.body.indexOf("kui gela")==0) {
		var msg = {
				body: "~ ডাকো কেনো গো, আমি আছি তো এখানে..!✋🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/dakoknogo.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙋‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }
