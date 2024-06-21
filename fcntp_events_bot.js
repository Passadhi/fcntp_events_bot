// 7097570929:AAHhYbNukz6gfruAq3S3DkYwqvmD-6CV2qM


// const TelegramBot = require('node-telegram-bot-api');
// const request = require('request');
// const fs = require('fs');

// const token = '7097570929:AAHhYbNukz6gfruAq3S3DkYwqvmD-6CV2qM';
// const bot = new TelegramBot(token, { polling: true });

// let direction_chosen = '';
// let theme_chosen = '';
// let text_chosen = '';
// let date_chosen = '';
// let photos = [];

// let photoIds = [];

// bot.onText(/\/start/, (msg) => {
//     const chatId = msg.chat.id;
//     const keyboard = {
//         reply_markup: {
//             keyboard: [['Отправить событие']],
//             one_time_keyboard: true
//         }
//     };
//     bot.sendMessage(chatId, "Добро пожаловать! Нажмите на кнопку 'Отправить событие'", keyboard);
// });

// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;

//     if (msg.text === 'Отправить событие') {
//         bot.sendMessage(chatId, "Выберите направление:", {
//             reply_markup: {
//                 keyboard: [['Направление 1', 'Направление 2', 'Направление 3', 'Направление 4', 'Направление 5', 'Направление 6', 'Направление 7', 'Направление 8', 'Направление 9', 'Направление 10', 'Направление 11', 'Направление 12', 'Направление 13', 'Направление 14', 'Направление 15', 'Направление 16']],
//                 one_time_keyboard: true
//             }
//         });
//     } else if (msg.text.startsWith('Направление')) {
//         direction_chosen = msg.text;
//         bot.sendMessage(chatId, "Напишите тему:");
//     } else {
//         if (direction_chosen !== '') {
//             if (theme_chosen === '') {
//                 theme_chosen = msg.text;
//                 bot.sendMessage(chatId, "Напишите текст:");
//             } else if (text_chosen === '') {
//                 text_chosen = msg.text;
//                 bot.sendMessage(chatId, "Напишите дату:");
//             } else if (date_chosen === '') {
//                 date_chosen = msg.text;
//                 bot.sendMessage(chatId, "Прикрепите фото:", {
//                     reply_markup: {
//                         keyboard: [['Нет больше фото']],
//                         one_time_keyboard: true
//                     }
//                 });
//             }
//         } else {
//             bot.sendMessage(chatId, "Пожалуйста, выберите направление из предложенных кнопок.");
//         }
//     }
// });

// bot.on('photo', async (msg) => {
//     const chatId = msg.chat.id;
//     const photoId = msg.photo[msg.photo.length - 1].file_id;
//     const fileDetails = await bot.getFile(photoId);
//     const photoUrl = `https://api.telegram.org/file/bot${token}/${fileDetails.file_path}`;
//     photos.push(photoUrl);
//     bot.sendMessage(chatId, "Фото добавлено. Если больше нет фото, нажмите 'Нет больше фото'.");
// });

// bot.onText(/Нет больше фото/, async (msg) => {
//     const chatId = msg.chat.id;
//     // Отправить данные и фотографии пользователю с id 1046852462
//     await bot.sendMessage(1046852462, `Направление: ${direction_chosen}\nТема: ${theme_chosen}\nТекст: ${text_chosen}\nДата: ${date_chosen}\nОтправитель: @${msg.chat.username}`);
//     for (let photo of photos) {
//         const photoPath = `./photos/${Date.now()}.jpg`;
//         await downloadPhoto(photo, photoPath);
//         bot.sendPhoto(1046852462, fs.createReadStream(photoPath));
//     }
//     photos = [];
//     direction_chosen = '';
//     theme_chosen = '';
//     text_chosen = '';
//     date_chosen = '';
//     bot.sendMessage(chatId, "Событие отправлено! Нажмите на кнопку 'Отправить событие' для отправки нового события", {
//         reply_markup: {
//             keyboard: [['Отправить событие']],
//             one_time_keyboard: true
//         }
//     });
// });

// async function downloadPhoto(url, path) {
//     return new Promise((resolve, reject) => {
//         request.head(url, (err, res, body) => {
//             request(url).pipe(fs.createWriteStream(path)).on('close', resolve);
//         });
//     });
// }































const request = require('request');
const TelegramBot = require('node-telegram-bot-api');

const token = '7097570929:AAHhYbNukz6gfruAq3S3DkYwqvmD-6CV2qM';
console.log('11111112121212')
const bot = new TelegramBot(token, { polling: true });

let direction_chosen = '';
let theme_chosen = '';
let text_chosen = '';
let date_chosen = '';
let photos = [];

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const keyboard = {
        reply_markup: {
            keyboard: [['Отправить событие']],
            one_time_keyboard: true
        }
    };
    bot.sendMessage(chatId, "Добро пожаловать! Нажмите на кнопку 'Отправить событие'", keyboard);
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;

    if (msg.text === 'Отправить событие') {
        bot.sendMessage(chatId, "Выберите направление:", {
            reply_markup: {
                keyboard: [['Направление 1', 'Направление 2', 'Направление 3', 'Направление 4', 'Направление 5', 'Направление 6', 'Направление 7', 'Направление 8', 'Направление 9', 'Направление 10', 'Направление 11', 'Направление 12', 'Направление 13', 'Направление 14', 'Направление 15', 'Направление 16']],
                one_time_keyboard: true
            }
        });
    } else if (msg.text.startsWith('Направление')) {
        direction_chosen = msg.text;
        bot.sendMessage(chatId, "Напишите тему:");
    } else {
        if (direction_chosen !== '') {
            if (theme_chosen === '') {
                theme_chosen = msg.text;
                bot.sendMessage(chatId, "Напишите текст:");
            } else if (text_chosen === '') {
                text_chosen = msg.text;
                bot.sendMessage(chatId, "Напишите дату:");
            } else if (date_chosen === '') {
                date_chosen = msg.text;
                bot.sendMessage(chatId, "Прикрепите фото:", {
                    reply_markup: {
                        keyboard: [['Нет больше фото']],
                        one_time_keyboard: true
                    }
                });
            }
        } else {
            bot.sendMessage(chatId, "Пожалуйста, выберите направление из предложенных кнопок.");
        }
    }
});

bot.on('photo', (msg) => {
    const chatId = msg.chat.id;
    const photo = msg.photo[msg.photo.length - 1].file_id;
    console.log('111111')
    photos.push(photo);
    console.log(photos)
    bot.sendMessage(chatId, "Фото добавлено. Если больше нет фото, нажмите 'Нет больше фото'.", {
        reply_markup: {
            keyboard: [['Нет больше фото']],
            one_time_keyboard: true
        }
    });
});

bot.onText(/Нет больше фото/, (msg) => {
    const chatId = msg.chat.id;
    // Отправить данные и фотографии пользователю с id 1046852462
    bot.sendMessage(1046852462, `Направление: ${direction_chosen}\nТема: ${theme_chosen}\nТекст: ${text_chosen}\nДата: ${date_chosen}\nОтправитель: @${msg.chat.username}`);
    photos.forEach(photo => {
        bot.sendPhoto(1046852462, photo);
    });
    photos = [];
    direction_chosen = '';
    theme_chosen = '';
    text_chosen = '';
    date_chosen = '';
    bot.sendMessage(chatId, "Событие отправлено! Нажмите на кнопку 'Отправить событие' для отправки нового события", {
        reply_markup: {
            keyboard: [['Отправить событие']],
            one_time_keyboard: true
        }
    });
});