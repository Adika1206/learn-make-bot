
const TelegramApi = require("node-telegram-bot-api")

const token = '5271376157:AAFUZ3zT6ofH7d0TwKy20IY6V5-fofQ0F4k'

const bot = new TelegramApi(token, {polling: true})


const start = () => {
    stickers = [
        "https://cdn.tlgrm.app/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/thumb128.webp",
        "https://tlgrm.ru/_/stickers/5cc/7a5/5cc7a5e5-1c4d-4eb5-8ea2-94a23e4142a9/1.webp",
        "https://tlgrm.ru/_/stickers/972/d03/972d03b1-80b4-43ac-8063-80e62b150d91/2.webp",
        "https://tlgrm.ru/_/stickers/33a/72c/33a72c5a-a761-4a8b-8e40-85295e357876/11.webp"
    ]
    mem = [
        "https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/1.webp",
        "https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/2.webp",
        "https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/4.webp",
        "https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/5.webp",
        "https://tlgrm.ru/_/stickers/d06/e20/d06e2057-5c13-324d-b94f-9b5a0e64f2da/9.webp"
    ]
    
    bot.setMyCommands([
        {command: '/start', description: 'Начальное приветствие'},
        {command: '/info_me', description: 'Получить информацию о пользователе'},
        {command: '/random_sticker', description: 'рандомный стикер'},
        {command: '/random_mem', description: "рандомный мем"}
    ])
    
    let sticker_rand = Math.floor(Math.random() * stickers.length);
    let mem_rand = Math.floor(Math.random() * mem.length);
    
    
    bot.on('message', async(msg) => {
        const text = msg.text
        const chatId = msg.chat.id
        if (text === "/start") {
            await bot.sendMessage(chatId, `Добро пожаловать`)
        }
        if (text === "/info_me") {
            await bot.sendMessage(chatId, `Тебя зовут ${msg.from.first_name}  ${msg.from.last_name}`)
        }
        if (text === "/random_sticker") {
            await bot.sendSticker(chatId, stickers[sticker_rand])
            return bot.sendMessage(chatId, "ваш рандомный стикер")
        } 
        if (text === "/random_mem") {
            await bot.sendSticker(chatId, mem[mem_rand])
            return bot.sendMessage(chatId, "ваш рандомный мем")
        }
        return bot.sendMessage(chatId, "Нету такой комманды")
    })
}

start()