import { Telegraf } from 'telegraf';
import type { NextApiRequest, NextApiResponse } from 'next';

const bot = new Telegraf(process.env.Here is the token for bot @calcupc_bot @calcupc_bot:

  7962866391:AAH0qYdk7JjumWXKJgvXtAP0Zx6Fj06AFLE);

// Обработка команды /start
bot.command('start', async (ctx) => {
  await ctx.reply(
    'Привет! Я бот с калькулятором. Нажмите на кнопку ниже, чтобы открыть калькулятор:',
    {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Открыть калькулятор',
              web_app: { url: process.env.NEXT_PUBLIC_APP_URL || 'https://v0-mini-calculator-app.vercel.app' }
            }
          ]
        ]
      }
    }
  );
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const update = req.body;
      await bot.handleUpdate(update);
      res.status(200).json({ ok: true });
    } catch (error) {
      console.error('Error in webhook:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(200).json({ ok: true });
  }
} 