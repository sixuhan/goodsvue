var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'udata'
})
conn.connect(err => {
    if (err) {
        console.log('[ERROR]: sql: ' + err);
        return
    }
})

module.exports = conn