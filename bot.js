require('dotenv').config()

const Discord = require('discord.js')

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`${client.user.tag} is ready to goooo!`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello!")
    }
})

client.login(process.env.BOT_TOKEN)

