
npm install -g firebase-tools

firebase login

mkdir bot
cd bot

firebase init functions

Update Firebase CLI and firebase-functions SDK  **
cd to functions/
>>npm install firebase-functions@latest firebase-admin@latest --save
>>npm install -g firebase-tools


deploy **
cd to functions/
>>firebase deploy --only functions



Example payload **
{
	"destination": "U69594a0b3a29625a274d7236894f5690",
	"events": [
		{
			"type": "message",
			"message": {
				"type": "text",
				"id": "494892294638403651",
				"quoteToken": "yXU1cdjoF09M9fRiSopcHvdN-KnGR7QcFH3H2ypSBR1WqxMc0kkReijVPF5bkEh_FJe-64ZiJn6nEskJLRemCp2eC8HRILciDJkbukT4FccxO0fwnwmnVNwB1H3S6BDgPbuxeRHinOyKydN3qkiwsA",
				"text": "H"
			},
			"webhookEventId": "01HPGPM3M6W6Y4XRARTMV9ZMH",
			"deliveryContext": {
				"isRedelivery": false
			},
			"timestamp": 1707810098309,
			"source": {
				"type": "user",
				"userId": "Ucd78e4d180dac11185673768f387b873"
			},
			"replyToken": "957196a8da354deaa818063b1be0606b",
			"mode": "active"
		}
	]
}



POST * Sending multicast flex message
https://us-central1-thongthai-linebot.cloudfunctions.net/LineBot

{
	"destination": "ACCESS_POINT",
	"events": [
		{
			"type": "Form",
			"data": {
                "topic": "flooded2",
                "building": "Tower A",
                "location": "Office",
                "reporter": "87778, John Sintsom",
                "taskId": "taskId1233"
			}
		}
	]
}