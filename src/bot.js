import { keyboard, keyboardButtons } from './keyboard/index.js';
import api from './api/fetch.js';
import bot from './api/bot.js';

bot.on('text', (msg) => {
  let cont = true;

  if (msg.text === keyboardButtons.advice.title) {
    getAdvice(msg);
    cont = false;
  }

  if (msg.text === keyboardButtons.quote.title) {
    getQuote(msg);
    cont = false;
  }

  keyboardButtons.rand.forEach((obj) => {
    if (msg.text === obj.title) {
      getRand(msg.chat.id, obj.id);
      cont = false;
    }
  });

  if (cont) {
    bot.sendMessage(msg.chat.id, '😈')
      .then(console.info)
      .catch(console.error);
    bot.sendMessage(msg.chat.id, `${msg.chat.first_name}, не понимаю тебя!`)
      .then(console.info)
      .catch(console.error);
  }
});

function getQuote(msg) {
  api.getQuote().then((message) => {
    bot.sendMessage(msg.chat.id, message, {
      parseMode: 'html',
      replyMarkup: bot.keyboard(keyboard),
    })
      .then(console.info)
      .catch(console.error);
  });
}

function getAdvice(msg) {
  api.getAdvice().then((text) => {
    bot.sendMessage(msg.chat.id, text, {
      replyMarkup: bot.keyboard(keyboard),
    })
      .then(console.info)
      .catch(console.error);
  });
}

function getRand(id, buttonId) {
  api.getRand(buttonId).then((text) => {
    bot.sendMessage(id, text, {
      replyMarkup: bot.keyboard(keyboard),
    })
      .then(console.info)
      .catch(console.error);
  });
}

export default bot;
