import TelegramBot from 'telebot';
import 'dotenv/config';

export default new TelegramBot(process.env.TELEGRAM_BOT_TOKEN);
