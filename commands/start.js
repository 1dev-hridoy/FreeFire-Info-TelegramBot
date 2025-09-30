const config = require('../config.json')

module.exports = {
    name: 'start',
    version: '1.0.0',
    author: '1dev-hridoy',
    usePrefix: true,
    adminOnly: false,
    allowedGroupOnly: false,
    verify: false,
    guide: 'Use /start to get a welcome message and bot information.',
    async execute(ctx) {
        await ctx.reply(
            'Welcome to the bot!\n' +
            'Made by 1dev-hridoy\n' +
            `Telegram: https://t.me/BD_NOOBRA\n` +
            `Support: ${config.allowedGroupLink}\n` +
            `Channel: ${config.verificationChannelLink}\n` +
            'Use /help to see available commands.'
        )
    }
}