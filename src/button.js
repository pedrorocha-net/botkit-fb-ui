exports.button = (params) => {
  const Widget = {

    message: {
      attachment: {
        type: 'template',
        payload: {
          template_type: 'button',
          text: params.text,
          buttons: [],
        },
      },
    },

    getMessage: () => Widget.message,

    addButton: (qrParams) => {
      let newButton;
      if (qrParams.type === 'web_url') {
        newButton = {
          type: qrParams.type,
          url: qrParams.url,
          title: qrParams.title,
          webview_height_ratio: qrParams.height,
          messenger_extensions: qrParams.msgExtEnabled,
          fallback_url: qrParams.fallbackUrl,
        };
      }
      else if (qrParams.type === 'postback') {
        newButton = {
          type: qrParams.type,
          title: qrParams.title,
          payload: qrParams.payload,
        };
      }
      Widget.message.attachment.payload.buttons.push(newButton);
    },
  };

  return Widget;
};
