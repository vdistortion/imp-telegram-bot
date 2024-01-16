import TelegramBot from 'telebot';
import 'dotenv/config';

export default new TelegramBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
  allowedUpdates: [],
  polling: {
    interval: 5000,
    timeout: 5000,
    retryTimeout: 5000,
  },
});
