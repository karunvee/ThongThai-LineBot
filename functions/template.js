/* eslint-disable linebreak-style */
const msgAlert = (data) => ({
    "type": "bubble",
    "direction": "ltr",
    "header": {
      "type": "box",
      "layout": "vertical",
      "backgroundColor": "#FF7272FF",
      "contents": [
        {
          "type": "text",
          "text": "Notification",
          "weight": "regular",
          "size": "xs",
          "color": "#FFFFFFFF",
          "align": "start",
          "contents": []
        },
        {
          "type": "text",
          "text": data.topic,
          "weight": "bold",
          "size": "lg",
          "color": "#FFFFFFFF",
          "align": "start",
          "wrap": true,
          "contents": []
        }
      ]
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "text",
          "text": "Building",
          "size": "xs",
          "contents": []
        },
        {
          "type": "box",
          "layout": "horizontal",
          "margin": "xs",
          "backgroundColor": "#FF9100FF",
          "cornerRadius": "sm",
          "contents": [
            {
              "type": "text",
              "text": data.building,
              "color": "#FFFFFFFF",
              "align": "center",
              "contents": []
            }
          ]
        },
        {
          "type": "text",
          "text": "Location",
          "size": "xs",
          "margin": "md",
          "contents": []
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xs",
          "backgroundColor": "#EEEEEEFF",
          "borderColor": "#FFFFFFFF",
          "cornerRadius": "sm",
          "contents": [
            {
              "type": "text",
              "text": data.location,
              "align": "center",
              "contents": []
            }
          ]
        },
        {
          "type": "text",
          "text": "Reporter",
          "size": "xs",
          "margin": "md",
          "contents": []
        },
        {
          "type": "box",
          "layout": "vertical",
          "margin": "xs",
          "backgroundColor": "#EEEEEEFF",
          "cornerRadius": "sm",
          "contents": [
            {
              "type": "text",
              "text": data.reporter,
              "align": "center",
              "contents": []
            }
          ]
        }
      ]
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": "Task ID: ",
              "size": "xxs",
              "color": "#BCBCBCFF",
              "align": "end",
              "gravity": "bottom",
              "contents": []
            },
            {
              "type": "text",
              "text": data.taskId,
              "size": "xxs",
              "color": "#BCBCBCFF",
              "align": "start",
              "gravity": "center",
              "contents": []
            }
          ]
        },
        {
          "type": "separator",
          "margin": "xs"
        },
        {
          "type": "box",
          "layout": "horizontal",
          "spacing": "md",
          "margin": "md",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Cancel",
                "text": "@Cancel"
              },
              "style": "secondary"
            },
            {
              "type": "button",
              "action": {
                "type": "message",
                "label": "Complete",
                "text": "@Complete"
              },
              "style": "primary"
            }
          ]
        }
      ]
    }
  }
);

module.exports = {msgAlert};
