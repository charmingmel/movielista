'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let mongoose = require('mongoose');
let movies = require('./routes/movies');
let app = express();

var dbName = 'movieDB';
var connectionString = 'mongodb://localhost:27017/' + dbName;

mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', movies);   //Route middle ware


app.set('port', process.env.PORT || 7000);

let server = app.listen(app.get('port'), function() {
  console.log('App listening on port ' + server.address().port);
});
// app.listen(7000, () => console.log('App is listen on port 7000'));
