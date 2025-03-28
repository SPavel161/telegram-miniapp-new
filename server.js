require('dotenv').config();
const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 8000;

// Проверяем наличие токена
console.log('Bot token:', process.env.BOT_TOKEN ? 'Токен найден' : 'Токен отсутствует');

// Включаем CORS и парсинг JSON
app.use(cors());
app.use(express.json());

// Создаем бота
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привет! Я калькулятор-бот. Используйте команду /calc для доступа к калькулятору.');
});

// Обработка команды /calc
bot.onText(/\/calc/, (msg) => {
    const chatId = msg.chat.id;
    const webAppUrl = `https://v0-mini-calculator-app.vercel.app`;
    bot.sendMessage(chatId, 'Откройте калькулятор:', {
        reply_markup: {
            inline_keyboard: [[
                { text: 'Открыть калькулятор', web_app: { url: webAppUrl } }
            ]]
        }
    });
});

// Обработка данных от веб-приложения
app.post('/webhook', (req, res) => {
    const { chatId, result } = req.body;
    bot.sendMessage(chatId, `Результат: ${result}`);
    res.json({ success: true });
});

// Обработка ошибок
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Что-то пошло не так!' });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`Port ${PORT} is already in use. Please try a different port.`);
    } else {
        console.error('Server error:', err);
    }
}); 