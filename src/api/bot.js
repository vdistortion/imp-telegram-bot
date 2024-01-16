import TelegramBot from 'telebot';
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
