function intents({ message, guild }) {
  let intentsValue = 0;

  if (message) {
    intentsValue += 1; // GUILD_MESSAGES
  }

  if (guild) {
    intentsValue += 512; // GUILDS
  }

  return intentsValue;
}


module.exports = {intents};