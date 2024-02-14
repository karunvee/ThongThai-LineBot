/* eslint-disable linebreak-style */
const msgAlert = (data) => ({
  "type": "bubble",
  "direction": "ltr",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "🚨 Notification",
        "weight": "regular",
        "size": "xs",
        "align": "start",
        "contents": []
      },
      {
        "type": "text",
        "text": data.topic,
        "weight": "bold",
        "size": "lg",
        "color": "#FF6C6CFF",
        "align": "start",
        "wrap": true,
        "contents": []
      },
      {
        "type": "separator",
        "margin": "lg"
      }
    ]
  },
  "body": {
    "type": "box",
    "layout": "vertical",
    "offsetBottom": "md",
    "contents": [
      {
        "type": "box",
        "layout": "vertical",
        "offsetBottom": "md",
        "backgroundColor": "#FFB561FF",
        "cornerRadius": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Building",
            "size": "xs",
            "color": "#FFFFFFFF",
            "margin": "md",
            "offsetStart": "md",
            "contents": []
          },
          {
            "type": "text",
            "text": data.building,
            "size": "md",
            "color": "#FFFFFFFF",
            "align": "center",
            "margin": "md",
            "offsetBottom": "md",
            "contents": []
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "offsetBottom": "sm",
        "backgroundColor": "#EEEEEEFF",
        "borderColor": "#FFFFFFFF",
        "cornerRadius": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Location",
            "size": "xs",
            "color": "#818181FF",
            "align": "start",
            "margin": "md",
            "offsetStart": "md",
            "contents": []
          },
          {
            "type": "text",
            "text": data.location,
            "size": "md",
            "align": "center",
            "margin": "md",
            "offsetBottom": "md",
            "contents": []
          }
        ]
      },
      {
        "type": "box",
        "layout": "vertical",
        "margin": "xs",
        "offsetTop": "md",
        "backgroundColor": "#EEEEEEFF",
        "cornerRadius": "sm",
        "contents": [
          {
            "type": "text",
            "text": "Reporter",
            "size": "xs",
            "color": "#818181FF",
            "margin": "md",
            "offsetStart": "md",
            "contents": []
          },
          {
            "type": "text",
            "text": data.reporter,
            "size": "md",
            "align": "center",
            "margin": "md",
            "offsetBottom": "md",
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
            "height": "sm",
            "style": "secondary"
          },
          {
            "type": "button",
            "action": {
              "type": "message",
              "label": "Complete",
              "text": "@Complete"
            },
            "height": "sm",
            "style": "primary"
          }
        ]
      }
    ]
  }
}
);


const msgMenu = () => ({
  "type": "bubble",
  "direction": "ltr",
  "header": {
    "type": "box",
    "layout": "vertical",
    "contents": [
      {
        "type": "text",
        "text": "เมนู",
        "contents": []
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "ดูงานปัจจุบันทั้งหมด",
          "uri": "https://developers.line.biz/en/"
        }
      },
      {
        "type": "button",
        "action": {
          "type": "uri",
          "label": "ประวัติงาน",
          "uri": "https://developers.line.biz/console/"
        }
      }
    ]
  }
});
module.exports = {msgAlert, msgMenu};
