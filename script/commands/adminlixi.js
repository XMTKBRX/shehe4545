    module.exports.config = {
    name: "هدية",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "يعطيك هدية بمبلغ عشوائي",
    commandCategory: "الاموال",
    usages: "",
    cooldowns: 5
    };
    var array = [];
    module.exports.run = async function ({ api,event,Users,Currencies,args }) {
    var x = global.data.allCurrenciesID;var out = (msg) => api.sendMessage(msg,event.threadID,event.messageID);
        let ix = ["500000","1000000","10505846","160515180","10081180","154518","1008181510","10084510","14051510","15151581","19851510","9910515","1651519","6951518","651519","6995151","42515131","54515182","15515181","15151510","10000515150"];
            let rxx = ix[Math.floor(Math.random() * ix.length)]; 
                let rxxi = global.data.allThreadID;var xs = false;
                    var mention = Object.keys(event.mentions);
                    switch (args[0]) {
                        case 'all': {
                            if (xs == true) return out("Red envelopes");
                            for (let ex of x) {
                                await Currencies.increaseMoney(ex, parseInt(rxx));
                                    array.push(ex);
                            }
                            for (let exs of rxxi) {
                                api.sendMessage(``,exs,(error,info) => {
                                    if (error) return;
                                });
                            }
                                xs = true;
                            return api.sendMessage("تم !",event.threadID);
                        }
                            break;
                        case "user": {
                            if (xs == true) return out("مغلفات حمراء");if(array.includes(args[1])) return out("  !");array.push(args[1]);
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المستخدم !",event.threadID,event.messageID);
                                await Currencies.increaseMoney(parseInt(args[1]), parseInt(rxx));
                                    out("تم الاسترداد بنجاح !");
                                        return api.sendMessage(" ،  حصلت ع فلوس هدية =) ، المبلغ الذي تلقيته هو : " +  rxx,parseInt(args[1]));
                        }
                            break;
                        case "thread": {
                            if (isNaN(args[1])) return api.sendMessage("الرجاء إدخال معرف المجموعة !",event.threadID,event.messageID);
                                var xl = await api.getThreadInfo(args[1]);
                                    var sll = xl.participantIDs;var outlix = [];
                                        for (let cham of sll) {
                                                if(array.includes(cham)) return outlix.push(cham);
                                            await Currencies.increaseMoney(cham, parseInt(rxx)); 
                                        }
                                    out("نجاح! ، عدد الأشخاص الذين لم يحالفهم الحظ للمرة الثانية هو : " + outlix.join(", "));
                                return api.sendMessage(" =))",parseInt(args[1]));
                        }   
                            break;  
                        case  `${mention[0]}`: {    
                            if (isNaN(mention[0])) return out("حدث خطاء =))");array.push(mention[0]);
                            if(array.includes(mention[0])) return out("انت حصلت فلوس بعد ماكو عزلمه !");
                                else await Currencies.increaseMoney(mention[0], parseInt(rxx)); 
                                    return out ("UwU " + event.mentions[mention].replace("@", "") + "حصلت ع فلوس الهدية  🐧, الملبغ هوة :  " + rxx);
                        }
                    break;
                default: {
                        if(array.includes(event.senderID)) return out("انت محصل عـا الفلوس قمنقلع   !");array.push(event.senderID);
                    await Currencies.increaseMoney(event.senderID, parseInt(rxx)); 
                return out("====[ لقد اصبحت غني👽🔥:بوت سام🔥🤧]====\nمبروك حصلت ع فلوس الحظ , والمبلغ هوة  : " + rxx);
            }
        }
    };