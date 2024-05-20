const { Client, GatewayIntentBits } = require('discord.js')
require('dotenv').config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
})

const GUILD_ID = process.env.GUILD_ID
const VERIFIED_ROLE_ID = process.env.VERIFIED_ROLE_ID

client.once('ready', async () => {
  console.log(`Logged in as ${client.user.tag}`)

  try {
    const guild = await client.guilds.fetch(GUILD_ID)
    await guild.members.fetch()
    console.log(`Cached all members of guild: ${guild.name}`)
  } catch (error) {
    console.error(`Failed to fetch guild: ${error.message}`)
  }
})

client.on('guildMemberUpdate', (oldMember, newMember) => {
  if (oldMember.guild.id !== GUILD_ID) return

  const oldRoles = oldMember.roles.cache
  const newRoles = newMember.roles.cache

  console.log(`Old Roles: ${Array.from(oldRoles.keys())}`)
  console.log(`New Roles: ${Array.from(newRoles.keys())}`)

  if (!oldRoles.has(VERIFIED_ROLE_ID) && newRoles.has(VERIFIED_ROLE_ID)) {
    console.log(`User ${newMember.id} has been verified.`)
  }
})

client.on('messageCreate', async message => {
  if (message.content.startsWith('!checkRole')) {
    const userId = message.content.split(' ')[1]
    const guild = client.guilds.cache.get(GUILD_ID)
    const member = await guild.members.fetch(userId)

    if (member.roles.cache.has(VERIFIED_ROLE_ID)) {
      message.channel.send(`User <@${userId}> has the Verified role.`)
    } else {
      message.channel.send(`User <@${userId}> does not have the Verified role.`)
    }
  }
})

client.login(process.env.BOT_SECURITY_TOKEN)
