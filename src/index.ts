import { keyboard, keyboardButtons } from './keyboard';
import api from './api/fetch';
import { bot, message, Markup, Input } from './api/bot';

type MapRandType = {
  [index: string]: string,
};

const mapRand: MapRandType = keyboardButtons.rand.reduce((acc: MapRandType, { id, title }) => {
  acc[title] = id;
  return acc;
}, {});

bot.start((ctx: any) => ctx.reply(`Будь как дома, путник ${ctx.chat.first_name}! 😈`, Markup.keyboard(keyboard)));

bot.help((ctx) => ctx.replyWithHTML(`
/start — Запуск/перезапуск бота
/cat — Запросить котика
/item — Что-то непонятное
/help — Список возможных команд
`));

bot.command('cat', (ctx) => api.getCat().then((url) => ctx.replyWithPhoto(Input.fromURL(url))));

bot.command('item', (ctx) => api.getList().then((text) => ctx.replyWithHTML(text)));

bot.on(message('text'), async (ctx: any) => {
  if (ctx.message.text === keyboardButtons.advice.title) {
    await getAdvice(ctx);
  } else if (ctx.message.text === keyboardButtons.quote.title) {
    await getQuote(ctx);
  } else if (mapRand[ctx.message.text]) {
    await getRand(ctx, mapRand[ctx.message.text]);
  } else {
    await ctx.reply(`${ctx.chat.first_name}, не понимаю тебя!`, {
      reply_to_message_id: ctx.message.message_id,
    });
    await ctx.reply('😈');
  }
});

async function getQuote(ctx: any) {
  const text = await api.getQuote();
  await ctx.replyWithHTML(text, {
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getAdvice(ctx: any) {
  const text = await api.getAdvice();
  await ctx.reply(text, {
    reply_to_message_id: ctx.message.message_id,
  });
}

async function getRand(ctx: any, buttonId: string) {
  const text = await api.getRand(buttonId);
  await ctx.reply(text, {
    reply_to_message_id: ctx.message.message_id,
  });
}

export default bot;
