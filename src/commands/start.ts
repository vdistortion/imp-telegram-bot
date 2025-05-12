import { Markup, type Context } from 'telegraf';
import createDebug from 'debug';
import { keyboard } from '../keyboard';

const debug = createDebug('bot:start_command');

const start = (aliases: Record<string, string>) => async (ctx: Context) => {
  debug('Triggered "start" command');

  const keyboardMarkup = Markup.keyboard(keyboard);
  let message = 'Держи клавиатуру! 😈';

  if (ctx.chat?.type === 'supergroup') {
    message = `Привет, чат <b>${ctx.chat.title}</b>! 😈`;
  } else if (ctx.chat?.type === 'private') {
    const alias = aliases[ctx.chat.username as string] || ctx.chat.first_name;
    message = `Будь как дома, путник <b>${alias}</b>! 😈`;
  }

  await ctx.replyWithHTML(message, keyboardMarkup);
};

export { start };
