const mysql = require('mysql2')

const Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'airbnd'
})

module.exports = Pool.promise()