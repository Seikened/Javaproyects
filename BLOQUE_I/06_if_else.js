//import all libraries necesaries to create a telegram Bot that can send messages to sms number  and create a telegram bot*/

import TelegramBot from node-telegram-bot-api
import request from 'request'



//create a new bot that can send messages to sms number  and create a telegram bot
const bot = new TelegramBot("2001341521:AAF9OlA1_ZykxIR_JgX__T6zy2G18CieFj8", {polling: true})


//create a function that can send messages to sms number  and create a telegram bot
bot.on('message', (msg) => {
    const chatId = msg.chat.id
    const message = msg.text
    const url = 'http://sms-gateway.me/api/mt/SendSMS?user=smsgateway&password=123456&senderid=senderid&channel=&DCS=0&flashsms=0&number=96655555555&text=message&route=1'
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            bot.sendMessage(chatId, 'message sent')
        } else {
            bot.sendMessage(chatId, 'message not sent')
        }
    })})








