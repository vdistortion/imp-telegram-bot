import createDebug from 'debug';
import { bot } from './bot';
import { VERCEL_PROJECT_PRODUCTION_URL } from '../env';

const debug = createDebug('bot:production');

export const production = async () => {
  if (!VERCEL_PROJECT_PRODUCTION_URL) throw new Error('VERCEL_PROJECT_PRODUCTION_URL is not set.');

  const webhookUrl = `https://${VERCEL_PROJECT_PRODUCTION_URL}/api`;
  const webhookInfo = await bot.api.getWebhookInfo();

  debug('Bot runs in production mode');

  if (webhookInfo.url !== webhookUrl) {
    debug(`deleting webhook: ${webhookInfo.url}`);
    await bot.api.deleteWebhook();
    debug(`setting webhook: ${webhookUrl}`);
    await bot.api.setWebhook(webhookUrl);
  }
};
