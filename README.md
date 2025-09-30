
# Telegram Bot Setup Guide

  

This guide will walk you through setting up and running this Telegram bot on your own machine.

  

## Prerequisites

  

- [Node.js](https://nodejs.org/) (version 14.x or higher)

- npm (usually comes with Node.js)

- A Telegram Account

  

## 1. Installation

  

First, clone the repository to your local machine and install the necessary dependencies.

  

```bash

# Clone the repository

git  clone  https://github.com/1dev-hridoy/FreeFire-Info-TelegramBot.git

  

# Navigate to the project directory

cd  FreeFire-Info-TelegramBot

  

# Install dependencies

npm  install

```

  

## 2. Getting a Bot Token

  

To run the bot, you need a unique token from Telegram.

  

1. Open Telegram and search for the `BotFather` user (he's the one with the blue checkmark).

2. Start a chat with `BotFather` and send the `/newbot` command.

3. Follow the prompts to choose a name and a username for your bot. The username must end in `bot` (e.g., `MyTestBot`).

4. Once you're done, `BotFather` will give you a long token. It will look something like `1234567890:ABCdEfGhIjKlMnOpQrStUvWxYz`.

5.  **Keep this token safe and private!**

  

## 3. Configuration

  

All the bot's settings are in the `config.json` file. You need to edit this file with your own information.

  

1. Open `config.json` in a text editor.

2. Fill in the following fields:

-  `ownerName`: Your name or nickname.

-  `ownerUid`: Your numeric Telegram User ID.

-  `botToken`: The token you got from `BotFather` in the previous step.

-  `baseUrl`: The base URL for the API the bot uses.

-  `botPrefix`: The command prefix (e.g., `/` or `!`).

-  `allowedGroupId`: The numeric ID of the Telegram group where the bot is allowed to work.

-  `allowedGroupLink`: The public link to the allowed group.

-  `verificationChannelUsername`: The `@username` of the channel users must join.

-  `verificationChannelLink`: The public link to that channel.

  

**Example `config.json`:**

```json

{

"ownerName": "1dev-hridoy",

"ownerUid": 123456789,

"botToken": "YOUR_BOT_TOKEN",

"baseUrl": "https://hridoy-ff-1.onrender.com/api",

"botPrefix": "/",

"allowedGroupId": -1002528061649,

"allowedGroupLink": "https://t.me/nexalo",

"verificationChannelUsername": "@bdnoobradeveloper",

"verificationChannelLink": "https://t.me/bdnoobradeveloper"

}

```

  

## 4. Running the Bot

  

Once you have completed the configuration, you can start the bot.

  

```bash

node  bot.js

```

  

If everything is set up correctly, you will see a confirmation message in your console, and your bot will be online.

  

## 5. Deployment

  

For instructions on how to host this bot for free 24/7, please see the deployment guides in the `docs` directory:

  

- [**English Hosting Guide**](./docs/HOSTING_EN.md)

- [**বাংলা হোস্টিং গাইড (Bangla)**](./docs/HOSTING_BN.md)

- [**हिंदी होस्टिंग गाइड (Hindi)**](./docs/HOSTING_HI.md)

  

## 6. Support

  

For support, suggestions, or issues, feel free to reach out:

  

-  **Developer:** 1dev-hridoy

-  **Telegram Group:** [Join Here](https://t.me/nexalo)

-  **Telegram Channel:** [@bdnoobradeveloper](https://t.me/bdnoobradeveloper)