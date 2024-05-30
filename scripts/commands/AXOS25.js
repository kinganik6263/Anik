const fs = require("fs");
module.exports.config = {
	name: "🙈",
	prefix: true,
    version: "1.0.1",
	permssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	category: "no prefix",
	usages: "🙉",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("voiceckanik")==0 || event.body.indexOf("nunu")==0 || event.body.indexOf("🫣")==0 || event.body.indexOf("🙈")==0) {
		var msg = {
				body: "~ ওলে বাবু টাহ লজ্জা পাইছো, কি দেখে লজ্জা পাইলা গো..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/lojja.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😽", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                 }
