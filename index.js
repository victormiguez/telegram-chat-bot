const TelegramBot = require('node-telegram-bot-api');
const token = require('./token');
const bot = new TelegramBot(token, { polling: true });

const avengers = require('./avengers');
const voteKeyboard = require('./vote-keyboard');
const removeKeyboard = require('./remove-keyboard');
const saveVote = require('./save-vote');

bot.onText(/\/votar/, function (msg, match) {
  const chatId = msg.chat.id;
  const avenger = avengers.getAvenger();

  bot.sendPhoto(chatId, avenger.picture, voteKeyboard)
  .then(res => {
    bot.once('message', (msg) => {
      let vote = Number(msg.text);

      if (!vote) {
        bot.sendMessage(chatId, 'Vota direito ae! \u{1F44E}', removeKeyboard);
        return false;
      }

      saveVote(vote, avenger);
      bot.sendMessage(chatId, '\u{1F44D}', removeKeyboard);
    });
  });
});
