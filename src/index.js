require("dotenv").config();

const {Client, IntentsBitField} = require('discord.js');

const client = new Client( {
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
})

client.on('ready', (c) => {
    console.log(`Sucessfully logged in as ${c.user.tag}!`);
});

client.on('interactionCreate', (interaction) => {
    if(!interaction.isChatInputCommand()) return;

    if(interaction.commandName === "ping") {
        interaction.reply("pong");
    }
    // console.log(interaction.commandName);
})

client.login(process.env.TOKEN);