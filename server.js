var express = require('express')
var bodyParser = require('body-parser')
var mongodb = require('mongodb')

//routes
var contacts = require('./routes/api/contacts')

var MONGO_URI = 'mongodb://localhost:27017'
var CONTACS_COLLECTION = 'contacts'

var app = express()

app.use(bodyParser.json())

var db

//connect Mongodb
mongodb.MongoClient.connect(MONGO_URI, (err, database) => {

    if (err) {
        console.log(err)
        process.exit(1)
    }

    db = database

    console.log('Database connection ready')

    var server = app.listen(process.env.PORT || 3000, () => {
        var port = server.address().port;

        console.log(`App now running on port ${port}`)
    })

})

app.use('/api', contacts)
