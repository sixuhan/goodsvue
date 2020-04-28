var path = require('path'),
    fs = require('fs')
var router = require('express').Router()

router.get('/a', (req, res) => {
    var data = [
        {
            a: 1,
            b: 2
        },
        {
            a: 'asd',
            b: 'bbb'
        },
        {
            a: 'asd',
            b: 'qweqwe'
        }
    ]
    setTimeout(() => {
        res.send(data)
        res.end()
    }, 2000);

})

module.exports = router