var express = require('express'),
    os = require('os'),

    https = require('https'),
    fs = require('fs')
require('colors')

var bodyParser = require('body-parser')
var app = express()

//跨域
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true")
    next();
})
//使用post必须要bodyParser
/* app.use(bodyParser.urlencoded({
    extended: true
})) */
app.use(bodyParser.json())

app.apprun = (port = 80, fn) => {
    var net = os.networkInterfaces()
    var netIP = (net['Wi-Fi'] && net['Wi-Fi'][1].address) || (net['以太网'] && net['以太网'][1].address)
    app.listen(port, () => {
        console.log('app running at')
        console.log(`本地：` + `http://localhost:${port}`.green)
        console.log(`网络：` + `http://${netIP}:${port}`.green)
        fn ? fn() : ''
    })
}

// https
app.apprun_https = (port = 443, fn) => {
    const httpsOptions = {
        /* cert: fs.readFileSync('./ssl/certificate.crt', 'utf8'),
        key: fs.readFileSync('./ssl/privatekey.pem', 'utf8') */
    }
    var net = os.networkInterfaces()
    var netIP = (net['Wi-Fi'] && net['Wi-Fi'][1].address) || (net['以太网'] && net['以太网'][1].address)

    https.createServer(httpsOptions, app).listen(port, () => {
        console.log('app running at')
        console.log(`本地：` + `https://localhost:${port}`.green)
        console.log(`网络：` + `https://${netIP}:${port}`.green)
        fn ? fn() : ''
    })
}

module.exports = app