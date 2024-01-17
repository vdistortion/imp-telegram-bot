import { Telegraf, Markup, Input } from 'telegraf';
import { message } from 'telegraf/filters';

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

export { bot, message, Markup, Input };
