import TelegramBot from 'telebot';
import 'telebot/plugins/shortReply.js';
import 'telebot/plugins/regExpMessage.js';
import 'dotenv/config';

export default new TelegramBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
  allowedUpdates: [],
  polling: {
    interval: 1000,
    timeout: 0,
    retryTimeout: 5000,
  },
});
