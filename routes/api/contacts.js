var express = require('express')
var router = express.Router()

router.get('/contacts', (req, res, next)=>{

    res.send('hello')

})

module.exports = router