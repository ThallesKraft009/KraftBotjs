const { Bot } = require("../index.js");

let bot = new Bot({
  token: process.env.token,
  intents: 3276799
})

bot.start()

bot.setStatus({
  status: "dnd",
  game: {
     name: "Opa",
     type: 0
  }
})

bot.event("MESSAGE_CREATE", function(msg){

  if (msg.data.content !== "teste") return;

  msg.reply({
    content: "bom dia",
    embeds: [{
      description: "Testando!"
    }]
  })
})