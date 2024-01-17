import { keyboard, keyboardButtons } from './keyboard/index.js';
import api from './api/fetch.js';
import {bot, message, Markup, Input} from './api/bot.js';

const mapRand = keyboardButtons.rand.reduce((acc, item) => {
  acc[item.title] = item.id;
  return acc;
}, {});

bot.start((ctx) => ctx.reply(`Будь как дома, путник ${ctx.chat.first_name}! 😈`, Markup.keyboard(keyboard)));

bot.help((ctx) => ctx.replyWithHTML(`
/start — Запуск/перезапуск бота
/cat — Запросить котика
/help — Список возможных команд
`));

bot.command('cat', (ctx) => {
  return api.getCat().then((url) => ctx.replyWithPhoto(Input.fromURL(url)));
});

bot.on(message('text'), (ctx) => {
  if (ctx.message.text === keyboardButtons.advice.title) {
    return getAdvice(ctx);
  } else if (ctx.message.text === keyboardButtons.quote.title) {
    return getQuote(ctx);
  } else if (mapRand[ctx.message.text]) {
    return getRand(ctx, mapRand[ctx.message.text]);
  } else {
    return ctx.reply(`${ctx.chat.first_name}, не понимаю тебя!`, {
      reply_to_message_id: ctx.message.message_id,
    }).then(() => ctx.reply('😈'));
  }
});

function getQuote(ctx) {
  return api.getQuote().then((text) => ctx.replyWithHTML(text, {
    reply_to_message_id: ctx.message.message_id,
  }));
}

function getAdvice(ctx) {
  return api.getAdvice().then((text) => ctx.reply(text, {
    reply_to_message_id: ctx.message.message_id,
  }));
}

function getRand(ctx, buttonId) {
  return api.getRand(buttonId).then((text) => ctx.reply(text, {
    reply_to_message_id: ctx.message.message_id,
  }));
}

export default bot;
