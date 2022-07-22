const Discord = require('discord.js')
/**
 * 
 * @param {Discord.client} client 
 * @param {Discord.message} message 
 * @param {Discord.arguments} arguments 
 */

module.exports.run = async (client, message, arguments, database)=> {

    const query = await database.executeQuery(`SELECT * FROM sportif INNER JOIN sport ON sportif.sport_id = sport.id WHERE sport_id = 2 ORDER BY classement LIMIT 3`)
    message.channel.send(`Résultat du podium ->🥇${query[0].classement} | Joueur : ${query[0].sportif_name} | Pays : ${query[0].pays} 
                                            🥈${query[1].classement} | Joueur : ${query[1].sportif_name} | Pays : ${query[1].pays} 
                                                🥉${query[2].classement} | Joueur : ${query[2].sportif_name} | Pays : ${query[2].pays}`)
}

module.exports.name = 'football';