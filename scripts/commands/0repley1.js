const fs = require("fs");
module.exports.config = {
  name: "salam",
  version: "2.0.0",
  permission: 0,
  credits: "nayan",
  description: "salam",
  prefix: false,
  category: "user",
  usages: "salam",
  cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Assalamualaikum")==0 || (event.body.indexOf("Assalamu alaikum")==0 || (event.body.indexOf("Asslamulikum")==0 || (event.body.indexOf("আসসালামুয়ালাইকুম")==0 || (event.body.indexOf("আসসালামু আলাইকুম")==0)))) {
		var msg = {
				body: "ওয়ালাইকুম সালাম ওয়া রাহমাতুল্লাহি ওয়াবারকাতুহু 🥀🌺:))"
    }
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
