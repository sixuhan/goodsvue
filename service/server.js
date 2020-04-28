var app = require('./server-config'),
    fs = require('fs'),
    path = require('path')

var resolve = path.resolve

// /api
!(function () {
    app.all('*', (req, res, next) => {
        console.log(req.path, req.query)
        next()
    })
    var dirs = fs.readdirSync(resolve(__dirname, './api'))
    dirs.forEach(dir => {
        var routerPath = (dir).replace(/(\.\w*)*$/, ''),
            router = require('./api/' + dir)

        app.use('/api/' + routerPath, router)
    })
})()

app.apprun(3000)