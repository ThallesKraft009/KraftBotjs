module.exports = class event {
  constructor(token, data){

    this.data = data;
    this.token = token;
    
    
  }

  async reply(msg){

    msg.message_reference = {
        message_id: this.data.id, 
        channel_id: this.data.channel_id,
        guild_id: this.data.guild_id, 
    };

    
    
   const endpoint = `/channels/${this.data.channel_id}/messages`;

  try {
    await DiscordRequest(this.token, endpoint, { method: 'POST', body: msg });
  } catch (err) {
    console.error(err);
  }
    
    
  }
}

async function DiscordRequest(token, endpoint, options) {
  const url = 'https://discord.com/api/v10/' + endpoint;

  if (options.body) options.body = JSON.stringify(options.body);

  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${token}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options
  });

  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }

  return res;
}