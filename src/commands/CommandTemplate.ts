import { MessageEmbed } from 'discord.js'
import Command from './CommandClass';
import type { ICommandInteraction, ICommandArgs } from './../types/index';

export default class extends Command {

	constructor(bot: any) {
		super(bot, {
			name: 'NAME',
			aliases: [],
			args: [
				{
					name: 'NAME_ARG',
					description: 'DESCRIPTION_ARG',
					type: 'STRING',
					required: true
				},
			],
			description: 'DESCRIPTION',
			category: 'CATEGORY',
			cooldown: 5,
			userPermissions: [],
			botPermissions: [],
			subCommands: [],
		})
	}
	async execute(interaction: ICommandInteraction, args: ICommandArgs) {
		console.log(interaction);
		console.log(args);
		console.log(MessageEmbed);
	}
}