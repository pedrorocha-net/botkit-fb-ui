exports.button = function (params) {

  const URL_BUTTON = 'web_url',
    POSTBACK_BUTTON = 'postback';

  let Widget = {

    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "button",
          text: params.messageText,
          buttons: []
        }
      }
    },

    getMessage: function () {
      return Widget.message;
    },

    addButton: (params) => {
      let newButton;
      if (params.type === URL_BUTTON) {
        newButton = {
          type: params.type,
          url: params.url,
          title: params.title
        }
      }
      else if (params.type === POSTBACK_BUTTON) {
        newButton = {
          type: params.type,
          title: params.title,
          payload: params.payload
        }
      }
      Widget.message.attachment.payload.buttons.push(newButton);
    }
  };

  return Widget;
};

exports.genericTemplate = () => {

  const URL_BUTTON = 'web_url',
    POSTBACK_BUTTON = 'postback';

  const Widget = {
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: []
        }
      }
    },

    getMessage: () => {
      return Widget.message;
    },

    addElement: (params) => {
      const newElement = {
        title: params.title,
        image_url: params.imageUrl,
        subtitle: params.subtitle,
        buttons: []
      };
      Widget.message.attachment.payload.elements.push(newElement);
    },

    addButton: (params) => {
      let newButton;
      if (params.type === URL_BUTTON) {
        newButton = {
          type: params.type,
          url: params.url,
          title: params.title
        }
      }
      else if (params.type === POSTBACK_BUTTON) {
        newButton = {
          type: params.type,
          title: params.title,
          payload: params.payload
        }
      }
      Widget.message.attachment.payload.elements[params.elementIndex].buttons.push(newButton);
    }
  };
  return Widget;
};

exports.linkedImage = (params) => {

  const Widget = {
    message: {
      attachment: {
        type: "template",
        payload: {
          template_type: "generic",
          elements: {
            element: params
          }
        }
      }
    },
    getMessage: function () {
      return Widget.message;
    }
  };
  return Widget;

};

exports.quickReply = function (params) {

  let Widget = {
    message: {
      text: params.text,
      quick_replies: []
    },
    getMessage: function () {
      return Widget.message;
    },
    addQuickReply: function (params) {
      let quick_reply = {
        content_type: params.contentType,
        title: params.title,
        payload: params.payload
      };
      Widget.message.quick_replies.push(quick_reply);
    },
    cleanReplies: ()=> {
      if (Widget.message.quick_replies.length != 0) {
        Widget.message.quick_replies = [];
      }
    }
  };
  return Widget;

};