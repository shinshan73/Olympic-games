const Discord = require('discord.js')
/**
 * 
 * @param {Discord.client} client 
 * @param {Discord.message} message 
 * @param {Discord.arguments} arguments 
 */

module.exports.run = async (client, message, arguments, database)=> {

    const [query] = await database.executeQuery(`SELECT * FROM sport INNER JOIN sportif WHERE sport.id = sportif.sport_id`)
    message.channel.send(`Voici le résultat du podium : [ Joueur ${query.sportif_name} Sport ${query.sport_name} classement ${query.classement} ]`)
}

module.exports.name = 'podium';