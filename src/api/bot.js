import TelegramBot from 'telebot';
import 'dotenv/config';

export default new TelegramBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
  pluginFolder: '../plugins/',
  usePlugins: ['shortReply', 'regExpMessage'],
});
