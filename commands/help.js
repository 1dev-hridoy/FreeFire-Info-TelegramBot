const config = require('../config.json')
const fs = require('fs').promises
const path = require('path')

module.exports = {
    name: 'help',
    version: '1.0.0',
    author: '1dev-hridoy',
    usePrefix: true,
    adminOnly: false,
    allowedGroupOnly: false,
    verify: false,
    guide: 'Use /help to list all available commands and their guides.',
    async execute(ctx) {
        const args = ctx.message.text.split(' ').slice(1)
        const commandsDir = path.join(__dirname, '..', 'commands')

        if (args.length === 0) {
   
            const files = await fs.readdir(commandsDir)
            const commandNames = files
                .filter(file => file.endsWith('.js'))
                .map(file => file.slice(0, -3))

            const helpMessage = [
                `*📜 AVAILABLE COMMANDS*`,
                ``,
                commandNames.map(name => `• \`${config.botPrefix}${name}\``).join('\n'),
                ``,
                `_Use /help <command> to see detailed info_`
            ].join('\n')

            await ctx.replyWithMarkdown(helpMessage, { reply_to_message_id: ctx.message.message_id })
        } else {
       
            const commandName = args[0].toLowerCase()
            const commandFile = path.join(commandsDir, `${commandName}.js`)

            try {
                const command = require(commandFile)
                const prefix = command.usePrefix ? config.botPrefix : ''
                const guide = [
                    `*📖 COMMAND HELP*`,
                    ``,
                    `**┌ Command:** \`${prefix}${command.name}\``,
                    `**├ Author:** ${command.author}`,
                    `**├ Version:** ${command.version}`,
                    `**└ Guide:** ${command.guide}`,
                    ``,
                    `_Developed by 1dev-hridoy 🚀_`
                ].join('\n')

                await ctx.replyWithMarkdown(guide, { reply_to_message_id: ctx.message.message_id })
            } catch (error) {
                await ctx.reply(`❌ Command not found: ${commandName}`, { reply_to_message_id: ctx.message.message_id })
            }
        }
    }
}
