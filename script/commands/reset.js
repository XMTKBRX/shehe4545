module.exports.config = {
	name: "رست",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "عمر",
	description: "اعاده تشغيل البوت",
	commandCategory: "المطور",
	cooldowns: 5000,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = [`100089045198484`,`100065302673515`];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ليس لديك الصلاحية فقط يودا سينباي", event.threadID, event.messageID);
    return api.sendMessage("جاري اعادة التشغيل ...⏳🕞", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
