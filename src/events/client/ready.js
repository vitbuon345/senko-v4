const { Client } = require('discord.js');
const config = require('../../../config');
const { connect } = require('mongoose');
// const { REST } = require("@discordjs/rest");
// const chalk = require("chalk");
// const { Routes } = require("discord-api-types/v9");

module.exports = {
    name: 'ready',

    /**
     * 
     * @param { Client } client
     */
    execute: async (c, client) => {
        console.log(`${client.user.tag} is ready!`);

        (async() => {
             connect(process.env.mongoURL).catch((e) => console.log(e))
        })()

        const applicationCommands = [];
        client.applicationCommands.forEach(command => applicationCommands.push(command));

        const guild = await client.guilds.fetch(config.guildID);
        guild.commands.set(applicationCommands);
        // const rest = new REST({ version: "9" }).setToken(process.env.token);
        // try {
        //     await rest.put(
        //         Routes.applicationGuildCommands(config.clientID, config.guildID),
        //         {
        //             body: applicationCommands,
        //         }
        //     );
        // } catch (error) {
        //     console.log(chalk.red(`applicationCommandsErr: ${error}`));
        // }
    }
};