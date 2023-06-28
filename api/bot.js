import TelegramBot from 'node-telegram-bot-api';
import 'dotenv/config';

export default new TelegramBot(process.env.TOKEN, { polling: true });
