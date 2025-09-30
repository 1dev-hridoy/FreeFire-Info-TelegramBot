const { Telegraf } = require('telegraf')
const fs = require('fs').promises
const path = require('path')
const chalk = require('chalk')
const config = require('./config.json')
const bot = new Telegraf(config.botToken)


function a0_0x1767(){const _0x27f4f9=['#3333FF','60181zRxBLz','Channel:\x20https://t.me/bdnoobradeveloper','2827115tIpRHN','#CC33FF','\x0a██\x20\x20\x20\x20██\x20██████\x20\x20███████\x20██\x20\x20\x20\x20██\x20\x20\x20\x20\x20\x20\x20██\x20\x20\x20██\x20██████\x20\x20██\x20██████\x20\x20\x20██████\x20\x20██\x20\x20\x20\x20██\x20\x0a\x20██\x20\x20███\x20██\x20\x20\x20██\x20██\x20\x20\x20\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20\x20\x20\x20\x20██\x20\x20\x20██\x20██\x20\x20\x20██\x20██\x20██\x20\x20\x20██\x20██\x20\x20\x20\x20██\x20\x20██\x20\x20██\x20\x20\x0a\x20\x20██\x20\x20██\x20██\x20\x20\x20██\x20█████\x20\x20\x20██\x20\x20\x20\x20██\x20█████\x20███████\x20██████\x20\x20██\x20██\x20\x20\x20██\x20██\x20\x20\x20\x20██\x20\x20\x20████\x20\x20\x20\x0a\x20██\x20\x20\x20██\x20██\x20\x20\x20██\x20██\x20\x20\x20\x20\x20\x20\x20██\x20\x20██\x20\x20\x20\x20\x20\x20\x20\x20██\x20\x20\x20██\x20██\x20\x20\x20██\x20██\x20██\x20\x20\x20██\x20██\x20\x20\x20\x20██\x20\x20\x20\x20██\x20\x20\x20\x20\x0a██\x20\x20\x20\x20██\x20██████\x20\x20███████\x20\x20\x20████\x20\x20\x20\x20\x20\x20\x20\x20\x20██\x20\x20\x20██\x20██\x20\x20\x20██\x20██\x20██████\x20\x20\x20██████\x20\x20\x20\x20\x20██\x20\x20\x20\x20\x0a','log','105272TOlSme','#CC66FF','floor','107701sMxWlr','split','forEach','6UQsvfN','1028362uXHRSi','279atjgQU','6cEeWdo','#CC00FF','#9999FF','#CCCCFF','1429424pnkFrS','Telegram:\x20https://t.me/BD_NOOBRA','6042701WwoKAd','#0000FF','hex','4390VRmAJi','#CC99FF','length'];a0_0x1767=function(){return _0x27f4f9;};return a0_0x1767();}const a0_0x2c2c60=a0_0x11ba;function a0_0x11ba(_0x2acb8b,_0x4ce834){const _0x176762=a0_0x1767();return a0_0x11ba=function(_0x11ba32,_0x5157ea){_0x11ba32=_0x11ba32-0xb4;let _0x1c37f4=_0x176762[_0x11ba32];return _0x1c37f4;},a0_0x11ba(_0x2acb8b,_0x4ce834);}(function(_0x551e3a,_0xb00d3d){const _0x1001f4=a0_0x11ba,_0x47534b=_0x551e3a();while(!![]){try{const _0x504ae7=parseInt(_0x1001f4(0xc1))/0x1+-parseInt(_0x1001f4(0xc5))/0x2+-parseInt(_0x1001f4(0xc4))/0x3*(-parseInt(_0x1001f4(0xcb))/0x4)+-parseInt(_0x1001f4(0xba))/0x5+parseInt(_0x1001f4(0xc7))/0x6*(-parseInt(_0x1001f4(0xcd))/0x7)+parseInt(_0x1001f4(0xbe))/0x8*(-parseInt(_0x1001f4(0xc6))/0x9)+-parseInt(_0x1001f4(0xb4))/0xa*(-parseInt(_0x1001f4(0xb8))/0xb);if(_0x504ae7===_0xb00d3d)break;else _0x47534b['push'](_0x47534b['shift']());}catch(_0x29c74d){_0x47534b['push'](_0x47534b['shift']());}}}(a0_0x1767,0xd53be));const gradientColors=[chalk['hex'](a0_0x2c2c60(0xce)),chalk[a0_0x2c2c60(0xcf)](a0_0x2c2c60(0xb7)),chalk[a0_0x2c2c60(0xcf)]('#6666FF'),chalk[a0_0x2c2c60(0xcf)](a0_0x2c2c60(0xc9)),chalk[a0_0x2c2c60(0xcf)](a0_0x2c2c60(0xca)),chalk[a0_0x2c2c60(0xcf)](a0_0x2c2c60(0xb5)),chalk['hex'](a0_0x2c2c60(0xbf)),chalk[a0_0x2c2c60(0xcf)](a0_0x2c2c60(0xbb)),chalk['hex'](a0_0x2c2c60(0xc8))],asciiArt=a0_0x2c2c60(0xbc);function displayStartupMessage(){const _0x3d6550=a0_0x2c2c60,_0xef252c=asciiArt['trim']()[_0x3d6550(0xc2)]('\x0a');_0xef252c[_0x3d6550(0xc3)]((_0x217406,_0x3bf55c)=>{const _0x306f80=_0x3d6550,_0x5cc7c5=Math[_0x306f80(0xc0)](_0x3bf55c/_0xef252c[_0x306f80(0xb6)]*gradientColors[_0x306f80(0xb6)]);console[_0x306f80(0xbd)](gradientColors[_0x5cc7c5](_0x217406));}),console[_0x3d6550(0xbd)](chalk[_0x3d6550(0xcf)]('#CC00FF')('Made\x20by\x201dev-hridoy')),console[_0x3d6550(0xbd)](chalk[_0x3d6550(0xcf)](_0x3d6550(0xc8))(_0x3d6550(0xcc))),console[_0x3d6550(0xbd)](chalk['hex']('#CC00FF')('Support:\x20https://t.me/nexalo')),console['log'](chalk['hex'](_0x3d6550(0xc8))(_0x3d6550(0xb9)));}

const logger = async (ctx, next) => {
    const start = Date.now()
    console.log(chalk.cyan(`[${new Date().toISOString()}] ${ctx.from?.id || 'Unknown'}: ${ctx.message?.text || ctx.updateType}`))
    await next()
    const ms = Date.now() - start
    console.log(chalk.cyan(`[${new Date().toISOString()}] Response time: ${ms}ms`))
}


bot.use(logger)


async function isUserChannelMember(ctx) {
    try {
        const chatMember = await ctx.telegram.getChatMember(config.verificationChannelUsername, ctx.from.id)
        return ['member', 'administrator', 'creator'].includes(chatMember.status)
    } catch (error) {
        console.error(chalk.red('Error checking channel membership:', error))
        return false
    }
}


async function loadCommands() {
    const commandsDir = path.join(__dirname, 'commands')
    const files = await fs.readdir(commandsDir)
    
    for (const file of files) {
        if (file.endsWith('.js')) {
            const command = require(path.join(commandsDir, file))
            if (command.name && typeof command.execute === 'function') {
               
                const commandName = command.usePrefix ? command.name : command.name;
                bot.command(commandName, async (ctx) => {
                    const inputCommand = ctx.message.text.split(' ')[0].slice(1);

                
                    if (command.usePrefix && !ctx.message.text.startsWith(config.botPrefix)) {
                        return ctx.reply(`Please use the command with prefix: ${config.botPrefix}${command.name}`);
                    }
                    if (!command.usePrefix && ctx.message.text.startsWith(config.botPrefix)) {
                        return ctx.reply(`Please use the command without prefix: ${command.name}`);
                    }

             
                    if (command.adminOnly && ctx.from.id !== config.ownerUid) {
                        return ctx.reply('This command is restricted to the bot owner.');
                    }

               
                    if (command.allowedGroupOnly && ctx.chat.id !== config.allowedGroupId) {
                        return ctx.reply(
                            `This command can only be used in the allowed group: ${config.allowedGroupLink}`
                        )
                    }


                    if (command.verify) {
                        const isMember = await isUserChannelMember(ctx)
                        if (!isMember) {
                            return ctx.reply(
                                `You must join our channel to use this command: ${config.verificationChannelLink}`
                            )
                        }
                    }

                    command.execute(ctx).catch(error => {
                        console.error(chalk.red(`Error in command ${command.name}:`, error))
                        ctx.reply('An error occurred while executing the command.')
                    })
                })
                console.log(chalk.green(`Loaded command: ${command.name} (v${command.version}, by ${command.author})`))
            }
        }
    }
}


bot.catch((err, ctx) => {
    console.error(chalk.red(`Error for ${ctx.updateType}:`, err))
    ctx.reply('Sorry, something went wrong!')
})


async function startBot() {
    try {
        displayStartupMessage()
        await loadCommands()
        await bot.launch()
        console.log(chalk.green(`Bot started successfully as @${bot.botInfo?.username}`))
    } catch (error) {
        console.error(chalk.red('Failed to start bot:', error))
    }
}


process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))

startBot()