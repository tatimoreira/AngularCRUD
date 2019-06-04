
const express = require('express');
const app = express();
const candidateRoutes = express.Router();

let Candidate = require('../models/Candidate');

// Defined store route
candidateRoutes.route('/add').post(function (req, res) {
  let candidate = new Candidate(req.body);
  candidate.save()
    .then(candidate => {
      res.status(200).json({'candidate': 'candidate added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
candidateRoutes.route('/').get(function (req, res) {
    Candidate.find(function (err, candidates){
    if(err){
      console.log(err);
    }
    else {
      res.json(candidates);
    }
  });
});

// Defined edit route
candidateRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Candidate.findById(id, function (err, candidate){
      res.json(candidate);
  });
});

//  Defined update route
candidateRoutes.route('/update/:id').post(function (req, res) {
    Candidate.findById(req.params.id, function(err, next, candidate) {
    if (!candidate)
      return next(new Error('Could not load Document'));
    else {
        candidate.person_name = req.body.person_name;
        candidate.job = req.body.job;
        candidate.resume = req.body.resume;

        candidate.save().then(candidate => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
candidateRoutes.route('/delete/:id').get(function (req, res) {
    Candidate.findByIdAndRemove({_id: req.params.id}, function(err, candidate){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = candidateRoutes;