import { keyboard, keyboardButtons } from './keyboard/index.js';
import api from './api/fetch.js';
import { bot, message, Markup } from './api/bot.js';

const mapRand = keyboardButtons.rand.reduce((acc, item) => {
  acc[item.title] = item.id;
  return acc;
}, {});

bot.start(async (ctx) => {
  await ctx.reply('Welcome!', {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
});

bot.on(message('text'), async (ctx) => {
  if (ctx.message.text === keyboardButtons.advice.title) {
    await getAdvice(ctx);
  } else if (ctx.message.text === keyboardButtons.quote.title) {
    await getQuote(ctx);
  } else if (mapRand[ctx.message.text]) {
    await getRand(ctx, mapRand[ctx.message.text]);
  } else {
    await ctx.reply('😈');
    await ctx.reply(`${ctx.chat.first_name}, не понимаю тебя!`, {
      reply_markup: Markup.keyboard(keyboard),
      reply_to_message_id: ctx.message.message_id,
    });
  }
});

async function getQuote(ctx) {
  const text = await api.getQuote();

  return ctx.replyWithHTML(text, {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getAdvice(ctx) {
  const text = await api.getAdvice();

  return ctx.reply(text, {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getRand(ctx, buttonId) {
  const text = await api.getRand(buttonId);

  return ctx.reply(text, {
    reply_markup: Markup.keyboard(keyboard),
    reply_to_message_id: ctx.message.message_id,
  });
}

export default bot;
