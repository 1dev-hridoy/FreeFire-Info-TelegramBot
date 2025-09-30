const axios = require('axios')
const config = require('../config.json')

module.exports = {
    name: 'get',
    version: '1.0.0',
    author: '1dev-hridoy',
    usePrefix: true,
    adminOnly: false,
    allowedGroupOnly: true,
    verify: true,
    guide: `Use ${config.botPrefix}get <uid> to fetch user profile information.`,
    async execute(ctx) {
        const args = ctx.message.text.split(' ').slice(1)
        if (args.length < 1) {
            return ctx.reply(`Please provide a UID.\nUsage: ${config.botPrefix}get <uid>`)
        }

        const uid = args[0]
        try {
            const response = await axios.get(`${config.baseUrl}/info?uid=${uid}`)
            const data = response.data


            const formatDate = (timestamp) => {
                return new Date(timestamp * 1000).toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    hour12: true
                })
            }

         
            const regionFlags = {
                'BD': '🇧🇩',
                'IN': '🇮🇳',
             
            }

        
            const message = [
                '┌ 👤 ACCOUNT BASIC INFO',
                `├─ Name: ${data.basicInfo.nickname}`,
                `├─ UID: ${data.basicInfo.accountId}`,
                `├─ Prime Level: ${data.basicInfo.primeLevel.replace('PRIME_LEVEL_', '')}`,
                `├─ Level: ${data.basicInfo.level} (Exp: ${data.basicInfo.exp.toLocaleString()})`,
                `├─ Region: ${regionFlags[data.basicInfo.region] || data.basicInfo.region}`,
                `├─ Likes: ${data.basicInfo.liked.toLocaleString()}`,
                `├─ Language: ${data.socialInfo.language.replace('Language_', '')}`,
                `├─ Signature: ${data.socialInfo.signature || 'None'}`,
                `├─ Account Type: ${data.basicInfo.accountType}`,
                `├─ Has Elite Pass: ${data.basicInfo.hasElitePass}`,
                `├─ Prime Points: ${data.basicInfo.primePoints}`,
                `├─ Prime Season Progress: ${data.basicInfo.primeSeasonProgress}`,
                `├─ Prime Expire Time: ${data.basicInfo.primeExpireTime || 'None'}`,
                `└─ Role: ${data.basicInfo.role}`,
                '',
                '┌ 🎮 ACCOUNT ACTIVITY',
                `├─ Most Recent OB: ${data.basicInfo.releaseVersion}`,
                `├─ Current BP Badges: ${data.basicInfo.badgeCnt}`,
                `├─ BR Rank: ${data.basicInfo.rank}, (${data.basicInfo.rankingPoints.toLocaleString()})`,
                `├─ BR Max Rank: ${data.basicInfo.maxRank}`,
                `├─ CS Rank: ${data.basicInfo.csRank}, (${data.basicInfo.csRankingPoints.toLocaleString()})`,
                `├─ CS Max Rank: ${data.basicInfo.csMaxRank}`,
                `├─ Preferred Mode: ${data.socialInfo.modePrefer.replace('ModePrefer_', '')}`,
                `├─ Show Rank Mode: ${data.socialInfo.rankShow.replace('RankShow_', '')}`,
                `├─ Season ID: ${data.basicInfo.seasonId}`,
                `├─ Show BR Rank: ${data.basicInfo.showBrRank}`,
                `├─ Show CS Rank: ${data.basicInfo.showCsRank}`,
                `├─ Honor Score: ${data.creditScoreInfo.creditScore}`,
                `├─ Honor Score Period Ends: ${formatDate(data.creditScoreInfo.periodicSummaryEndTime)}`,
                `├─ Created At: ${formatDate(data.basicInfo.createAt)}`,
                `└─ Last Login: ${formatDate(data.basicInfo.lastLoginAt)}`,
                '',
                '┌ 👕 ACCOUNT OVERVIEW',
                `├─ Avatar ID: ${data.profileInfo.avatarId}`,
                `├─ Banner ID: ${data.basicInfo.bannerId}`,
                `├─ HeadPic ID: ${data.basicInfo.headPic}`,
                `├─ Title ID: ${data.basicInfo.title}`,
                `├─ Weapon Skin Show: ${data.basicInfo.weaponSkinShows.join(', ') || 'None'}`,
                ` ├─ Equipped Items: ${data.profileInfo.clothes.join(', ') || 'None'}`,
                `├─ Equipped Skills: ${data.profileInfo.equipedSkills.join(', ') || 'None'}`,
                `├─ Skin Color: ${data.profileInfo.skinColor}`,
                `├─ Is Selected: ${data.profileInfo.isSelected}`,
                `├─ Is Selected Awaken: ${data.profileInfo.isSelectedAwaken}`,
                `├─ External Icon Status: ${data.basicInfo.externalIconInfo.status.replace('ExternalIconStatus_', '')}`,
                `└─ External Icon Show Type: ${data.basicInfo.externalIconInfo.showType.replace('ExternalIconShowType_', '')}`,
                '',
                '┌ 🛡️ CLAN INFO',
                `├─ Clan Name: ${data.clanBasicInfo.clanName}`,
                `├─ Clan ID: ${data.clanBasicInfo.clanId}`,
                `├─ Clan Level: ${data.clanBasicInfo.clanLevel}`,
                `├─ Captain ID: ${data.clanBasicInfo.captainId}`,
                `├─ Captain Name: ${data.captainBasicInfo.nickname}`,
                `├─ Captain Level: ${data.captainBasicInfo.level} (Exp: ${data.captainBasicInfo.exp.toLocaleString()})`,
                `├─ Captain BR Rank: ${data.captainBasicInfo.rank}, (${data.captainBasicInfo.rankingPoints.toLocaleString()})`,
                `├─ Captain CS Rank: ${data.captainBasicInfo.csRank}, (${data.captainBasicInfo.csRankingPoints.toLocaleString()})`,
                `├─ Member Count: ${data.clanBasicInfo.memberNum}`,
                `└─ Capacity: ${data.clanBasicInfo.capacity}`,
                '',
                '┌ 🐾 PET INFO',
                `├─ Name: ${data.petInfo.name || 'Unnamed'}`,
                `├─ ID: ${data.petInfo.id}`,
                `├─ Level: ${data.petInfo.level} (Exp: ${data.petInfo.exp})`,
                `├─ Skin ID: ${data.petInfo.skinId}`,
                `├─ Selected Skill ID: ${data.petInfo.selectedSkillId}`,
                `└─ Is Selected: ${data.petInfo.isSelected}`,
                '',
                '┌ 💎 DIAMOND COST',
                `└─ Diamond Cost: ${data.diamondCostRes.diamondCost}`,
                '',
                '┌ 🎖️ CREDIT SCORE INFO',
                `├─ Reward State: ${data.creditScoreInfo.rewardState.replace('REWARD_STATE_', '')}`,
                `└─ Credit: ${data.credit}`
            ].join('\n')

            await ctx.reply(message, { reply_to_message_id: ctx.message.message_id })
        } catch (error) {
            console.error('Error fetching user data:', error.message)
            await ctx.reply('Failed to fetch user data. Please check the UID or try again later.', { reply_to_message_id: ctx.message.message_id })
        }
    }
}