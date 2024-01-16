import { keyboard, keyboardButtons } from './keyboard/index.js';
import api from './api/fetch.js';
import { bot, message, Markup } from './api/bot.js';

bot.on(message('text'), (ctx) => {
  let cont = true;

  if (ctx.message.text === keyboardButtons.advice.title) {
    getAdvice(ctx);
    cont = false;
  }

  if (ctx.message.text === keyboardButtons.quote.title) {
    getQuote(ctx);
    cont = false;
  }

  keyboardButtons.rand.forEach((obj) => {
    if (ctx.message.text === obj.title) {
      getRand(ctx, obj.id);
      cont = false;
    }
  });

  if (cont) {
    bot.telegram.sendMessage(ctx.chat.id, '😈')
      .catch(console.error);
    bot.telegram.sendMessage(ctx.chat.id, `${ctx.chat.first_name}, не понимаю тебя!`)
      .catch(console.error);
  }
});

async function getQuote(ctx) {
  const text = await api.getQuote();

  await bot.telegram.sendMessage(ctx.chat.id, text, {
    parse_mode: 'html',
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getAdvice(ctx) {
  const text = await api.getAdvice();

  await bot.telegram.sendMessage(ctx.chat.id, text, {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getRand(ctx, buttonId) {
  const text = await api.getRand(buttonId);

  await bot.telegram.sendMessage(ctx.chat.id, text, {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

export default bot;
