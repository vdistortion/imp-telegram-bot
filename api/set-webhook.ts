import type { VercelRequest, VercelResponse } from '@vercel/node';
import { bot } from '../src';

const VERCEL_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (!VERCEL_URL) return res.status(401).json({ message: 'Unauthorized' });
    const webhookUrl = `https://${VERCEL_URL}/api`
    await bot.api.setWebhook(webhookUrl);
    res.status(200).json({ message: `Webhook установлен на ${webhookUrl}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка установки webhook' });
  }
}
