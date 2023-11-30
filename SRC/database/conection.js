var knex = require('knex')({
    client: 'mysql',
    conection: {
        host: localhost,
        user: root,
        passoword: "",
        database: toDo
    }
})

module.exports = knex