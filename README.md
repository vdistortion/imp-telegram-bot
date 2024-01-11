## Telegram Bot Template for [Vercel](https://vercel.com)

### Run locally

#### 1. Install [Vercel CLI](https://vercel.com/docs/cli)

```bash
npm i -g vercel
```

#### 2. Install [CloudFlare tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/do-more-with-tunnels/trycloudflare/) (`cloudflared`)

[Download link](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/)

#### 3. Then run local dev server with tunnel

```bash
npm run dev-with-tunnel
```

And open link from terminal (ends with `*.trycloudflare.com`) to set WebHook

Now you can make some changes in [src/bot.js](src/bot.js)

[Documentation for TeleBot](https://github.com/mullwar/telebot)

### Template structure:

- [api/telegram.mjs](api/telegram.js) — Endpoint function for WebHooks
- [api/setWebhook.mjs](api/setWebhook.js) — Function for setting WebHook URL

###### P.S. Don't forget to remove or restrict [api/setWebhook.js](api/setWebhook.js) function before going to production
