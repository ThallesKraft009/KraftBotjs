const { Bot } = require("../index.js");

let bot = new Bot({
  token: process.env.token,
  intents: 3276799
})
bot.start()
bot.PrefixLoad({
  prefix: "k!",
  local: "example/Commands"
})