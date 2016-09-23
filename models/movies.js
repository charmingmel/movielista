'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let movieSchema = new Schema({
  title: String,
  genre: String
});


module.exports = mongoose.model('Movie', movieSchema);
