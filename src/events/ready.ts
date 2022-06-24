import type Bot from '../client';

export default class {
	bot: typeof Bot;
	constructor(bot: typeof Bot) {
		this.bot = bot;
	}

	run() {

		const data: any = [];
		const commandsCategories: string[] = [];
		this.bot.commands.forEach((c: any) => commandsCategories.push(c.category))
		const categories = [... new Set(commandsCategories)];
		for (const category of categories) {
			const commandsCategory = [...this.bot.commands].filter(([_, c]) => c.category === category);
			for (const c of commandsCategory) {
				if (c[1].subCommands?.length) {
					const commandOptions: any = [];
					c[1].subCommands.forEach((sc: any) => {
						commandOptions.push({
							type: 'SUB_COMMAND',
							name: sc.name,
							description: sc.description,
							required: sc.required,
							choices: sc.choices,
							options: sc.options
						})
					})
					data.push({
						type: 'SUB_COMMAND_GROUP',
						name: c[1].name,
						description: c[1].description,
						options: commandOptions
					})
				}
				else if (c[1].options && c[1].options.length) {
					const commandOptions: any = [];
					c[1].options.forEach((a: any) => {
						commandOptions.push({
							type: a.type || 'STRING',
							name: a.name,
							description: a.description,
							required: a.required,
							choices: a.choices,
							options: a.options
						})
					})
					data.push({
						name: c[1].name,
						description: c[1].description,
						options: commandOptions
					})
				}
				else {
					data.push({
						name: c[1].name,
						description: c[1].description,
					})
				}

			}
		}
		this.bot.client.application!.commands.set(data, `${this.bot.client.user?.id}`);
		console.log(`Logged in as ${this.bot.client.user?.tag}!`);
	}
}