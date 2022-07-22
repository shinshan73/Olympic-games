const Discord = require('discord.js')
/**
 * 
 * @param {Discord.client} client 
 * @param {Discord.message} message 
 * @param {Discord.arguments} arguments 
 */

module.exports.run = async (client, message, arguments, database)=> {

    const [query] = await database.executeQuery(`SELECT * FROM sportif INNER JOIN sport ON sportif.sport_id = sport.id ORDER BY classement LIMIT 3`)
    message.channel.send(`Résultat du podium = classement : ${query.classement} - Joueur : ${query.sportif_name}  Sport : ${query.sport_name}`)
}

module.exports.name = 'podium';