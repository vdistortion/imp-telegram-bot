# ImpBot

A starter template for Telegram bots on Serverless, with [Vercel](https://vercel.com), [Netlify](https://netlify.com), and [more](https://nitro.unjs.io/deploy) support.

Built top of [Nitro](https://nitro.unjs.io/) and [telegraf.js](https://www.npmjs.com/package/telegraf).

## Local Development

1. Create a bot with [@BotFather](https://t.me/BotFather), and get the bot token.
2. Clone this repo.
3. Run `npm ci` to install dependencies.
4. Copy `.env.example` to `.env`, and fill in the `TELEGRAM_BOT_TOKEN` and `SECRET_HASH` (whatever you want) in `.env`.
5. Run `npm run dev` to start the development server.
6. Expose your local server to the internet with [ngrok](https://ngrok.com/).
7. Visit https://your-domain.com/telegram-hook?setWebhook=true
8. Send `/start` to your bot.

## Deployment

1. Deploy on [Vercel](https://vercel.com) or [Netlify](https://netlify.com), with `TELEGRAM_BOT_TOKEN` and `SECRET_HASH` environment variables.
2. Visit https://your-domain.com/telegram-hook?setWebhook=true
3. Send `/start` to your bot.

## Credits

Thanks to the project [sxzz/telegram-bot-starter](https://github.com/sxzz/telegram-bot-starter).
