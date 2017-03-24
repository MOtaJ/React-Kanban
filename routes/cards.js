const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const db = require('./../models');
const { Cards } = db;

router.use(bodyParser.urlencoded({extended : true}))
router.use(bodyParser.json());


router.get('/getCard', (req, res, next) => {
  Cards.findAll({order: "id"})
  .then(function(cards) {
    res.json({cards : cards})
  })
});

router.post('/newCard', (req, res, next) => {
  Cards.create({
    Title: req.body.Title,
    Priority: req.body.Priority,
    CreatedBy: req.body.CreatedBy,
    AssignedTo: req.body.AssignedTo
  })
  .then(function(cards) {
    res.send('posted')
  })
});

module.exports = router;
