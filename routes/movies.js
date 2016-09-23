'use strict';

let express = require('express');
let Movie = require('./../models/movies');
let router = express.Router();

router
  .route('/movies')
    .get(function(req, res) {
      Movie.find(function(err, movies){
        if(err) return res.send(err);
        res.json(movies);
      });
    })
    .post(function(req, res) {
      let movie = new Movie(req.body);

      movie.save(function(err) {
        if(err) return res.send(err);
        res.json({message: 'New movie created'});
      })
    });

router
  .route('/movies/:id')
    .get(function(req, res) {
      Movie.findOne({'_id': req.params.id}, function(err, movie) {
        if(err) return res.send(err);
        res.json(movie);
      });
    })

    .put(function(req, res) {
      Movie.findOne({'_id': req.params.id}, function(err, movie) {
        if(err) return res.send(err);
        for (prop in req.body) {
          movie[prop] = req.body[prop];
        }

        movie.save(function(err) {
          if(err) return res.send(err);
          res.json({message: 'Movie Updated!'});
        });
      });
    })

    .delete(function(req, res) {
      Movie.remove({'_id': req.params.id}, function(err, doc) {
        if(err) return res.send(err);
        res.json({message: 'Movie Deleted!'});
      });
    });

module.exports = router;
