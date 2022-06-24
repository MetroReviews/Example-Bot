import 'dotenv/config'

export default {
	PREFIX: process.env.PREFIX,
	OWNER: {
		ID: process.env.OWNER_ID,
		NAME: process.env.OWNER_NAME
	},
	ADMINS: [
		"510065483693817867"
	],
	COLORS: {
		embed: '#3498db',
		red: '#ff0004',
		orange: 'ff8400',
		green: '#02ff30',
	},
	TOKENS: {
		DISCORD: process.env.TOKEN
	},
	LOGS: process.env.LOGS
}