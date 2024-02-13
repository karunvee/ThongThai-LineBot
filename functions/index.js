const functions = require("firebase-functions");
const request = require("request-promise");
const template = require("./template");

const runtimeOpts = {timeoutSeconds: 8, memory: "1GB", minInstances: 1};
const region = "asia-northeast1";

const LINE_MESSAGING_API = "https://api.line.me/v2/bot";
const CHANNEL_ACCESS_TOKEN = "NfKwKCdDVScsuwyliUHIzVJLW1LEMJ2AuCcMZ2aihxEvl8M4gaRHIv5xIRC0TryaMEwiKwIvhhqu09QRjhVQKEI0IrVZtfqA4Q4876epmQ+ylX+cbtKqV8Im/I5C61oI/9jMeYM/6BiuQ6kKmmyjpQdB04t89/1O/w1cDnyilFU=";
const LINE_HEADER = {
    "Content-type": "application/json",
    "Authorization": `Bearer ${CHANNEL_ACCESS_TOKEN}`
};
// eslint-disable-next-line camelcase
const data_tester = {
    topic: "flooded",
    building: "Tower A",
    location: "Office",
    reporter: "87778, John Sintsom",
    taskId: "taskId1233"
};
// 🚨⚠️🛑

exports.LineBot = functions.https.onRequest((req, res) => {
    if (req.method === "POST") {
        const destination = req.body.destination;
        const event = req.body.events[0];

        if (destination === "ACCESS_POINT") {
            res.status(200).send("ACCESS_POINT");
        } else {
            const event = req.body.events[0];
            if (event.message.text === "Example01") {
                reply(
                    event.replyToken,
                    {
                        type: "flex",
                        // eslint-disable-next-line camelcase
                        altText: `⚠️🚨⚠️ ${data_tester.topic} ⚠️🚨⚠️`,
                        contents: template.msgAlert(data_tester)
                    }
                );
            }
        }
    }

    res.status(200).send("OK");
});
const multicast = (token, payload) => {
    request.post({
        uri: `${LINE_MESSAGING_API}/message/multicast`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: token,
            messages: [payload]
        })
    });
};


const reply = (token, payload) => {
    request.post({
        uri: `${LINE_MESSAGING_API}/message/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: token,
            messages: [payload]
        })
    });
};
