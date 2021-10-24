// create a telegram bot with this token '2001341521:AAF9OlA1_ZykxIR_JgX__T6zy2G18CieFj8'


// create a bot
const TelegramBot = require('node-telegram-bot-api');
const token = '2001341521:AAF9OlA1_ZykxIR_JgX__T6zy2G18CieFj8';
const bot = new TelegramBot(token, {polling: true});


// create a function to send a message to the user
function sendMessage(chatId, message) {
    bot.sendMessage(chatId, message);
}


// create a function to send a message to the user
function sendMessageWithKeyboard(chatId, message, keyboard) {
    bot.sendMessage(chatId, message, {
        reply_markup: {
            keyboard: keyboard,
            resize_keyboard: true
        }
    });
}


// create a function to send a message to the user
function sendMessageWithInlineKeyboard(chatId, message, inlineKeyboard) {
    bot.sendMessage(chatId, message, {
        reply_markup: {
            inline_keyboard: inlineKeyboard
        }
    });
}