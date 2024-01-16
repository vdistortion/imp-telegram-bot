import TelegramBot from 'telebot';
import '../../node_modules/telebot/plugins/regExpMessage.js';
import '../../node_modules/telebot/plugins/shortReply.js';
import 'dotenv/config';

export default new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
