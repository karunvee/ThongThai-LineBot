const functions = require("firebase-functions");
const admin = require("firebase-admin");
const request = require("request-promise");
const template = require("./template");

const runtimeOpts = {timeoutSeconds: 8, memory: "1GB", minInstances: 1};
const region = "asia-northeast1";

admin.initializeApp();

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
// 🚨⚠️🛑 🟥 🟧 🟨 🟩 🟦 ⬜ ⬛

exports.LineBot = functions.https.onRequest(async (req, res) => {
    if (req.method === "POST") {
        const destination = req.body.destination;

        if (destination === "ACCESS_POINT") {
            const userIds = await getUserId();
            await multicast(
                userIds,
                {
                    type: "flex",
                    // eslint-disable-next-line camelcase
                    altText: `🚨 ${req.body.events[0].data.topic} 🚨`,
                    contents: template.msgAlert(req.body.events[0].data)
                }
            );
            res.status(200).send({status: "success", detail: "Sending a message via the data from the access point successfully."});
        } else {
            const events = req.body.events;

            events.forEach(async (event) => {
                switch (event.type) {
                    case "follow":
                        await storeUserId(event.source.userId);
                        break;
                    case "unfollow":
                        await removeUserId(event.source.userId);
                        break;
                    case "message":
                        if (event.message.text === "Example") {
                            await reply(
                                event.replyToken,
                                {
                                    type: "flex",
                                    // eslint-disable-next-line camelcase
                                    altText: `🚨 ${data_tester.topic} 🚨`,
                                    contents: template.msgAlert(data_tester)
                                }
                            );
                        } else if (event.message.text === "Menu") {
                            await reply(
                                event.replyToken,
                                {
                                    type: "flex",
                                    altText: "Menu",
                                    contents: template.msgMenu()
                                }
                            );
                        }
                        break;
                    default:
                        break;
                }
            });
        }
    }

    res.status(200).send("OK");
});

const multicast = async (userIds, payload) => {
    await request.post({
        uri: `${LINE_MESSAGING_API}/message/multicast`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            to: userIds,
            messages: [payload]
        })
    });
};


const reply = async (token, payload) => {
    await request.post({
        uri: `${LINE_MESSAGING_API}/message/reply`,
        headers: LINE_HEADER,
        body: JSON.stringify({
            replyToken: token,
            messages: [payload]
        })
    });
};

const storeUserId = async (userId) => {
    const firestore = admin.firestore();
    const usersCollection = firestore.collection("users");

    await usersCollection.doc(userId).set({
      addedAt: admin.firestore.FieldValue.serverTimestamp()
    });
};

const removeUserId = async (userId) => {
    const firestore = admin.firestore();
    const usersCollection = firestore.collection("users");

    await usersCollection.doc(userId).delete();
};


const getUserId = async () => {
    const firestore = admin.firestore();
    const usersCollection = firestore.collection("users");
    const querySnapshot = await usersCollection.get();
    const userIds = [];
    querySnapshot.forEach((doc) => {
      userIds.push(doc.id);
    });
    return userIds;
};
