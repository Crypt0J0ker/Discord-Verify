const axios = require('axios')
require('dotenv').config()

const GUILD_ID = process.env.GUILD_ID
const VERIFIED_ROLE_ID = process.env.VERIFIED_ROLE_ID

const USER_ID = process.argv[2]

if (!USER_ID) {
  console.error('User ID is required!')
  process.exit(1)
}

axios({
  method: 'GET',
  url: `https://discord.com/api/v9/guilds/${GUILD_ID}/members/${USER_ID}`,
  headers: {
    Authorization: `Bot ${process.env.BOT_SECURITY_TOKEN}`,
  },
})
  .then(response => {
    const roles = response.data.roles
    if (roles.includes(VERIFIED_ROLE_ID)) {
      console.log('User has the Verified role')
    } else {
      console.log('User does not have the Verified role')
    }
  })
  .catch(error => {
    console.error(`Failed to fetch user or guild: ${error.message}`)
  })
