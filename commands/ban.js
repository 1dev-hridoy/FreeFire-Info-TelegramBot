const axios = require('axios');
const config = require('../config.json');

module.exports = {
    name: 'ban',
    version: '1.0.0',
    author: '1dev-hridoy',
    usePrefix: true,
    adminOnly: false,
    allowedGroupOnly: true,
    verify: true,
    guide: `Use ${config.botPrefix}ban <uid> to check the ban status of a user.`, 
    async execute(ctx) {
        const args = ctx.message.text.split(' ').slice(1);
        if (args.length < 1) {
            return ctx.reply(`Please provide a UID.\nUsage: ${config.botPrefix}ban <uid>`);
        }

        const uid = args[0];
        const waitMessage = await ctx.reply('Please wait, I\'m checking the ban status...');

        try {
            const response = await axios.get(`${config.baseUrl}/ban-check-image?uid=${uid}`, {
                responseType: 'arraybuffer',
                timeout: 60000
            });

            await ctx.replyWithPhoto({ source: Buffer.from(response.data) }, { reply_to_message_id: ctx.message.message_id });
        } catch (error) {
            console.error('Error fetching ban status image:', error);
            await ctx.reply('Failed to fetch ban status. Please check the UID or try again later.', { reply_to_message_id: ctx.message.message_id });
        } finally {
            await ctx.telegram.deleteMessage(ctx.chat.id, waitMessage.message_id);
        }
    }
};