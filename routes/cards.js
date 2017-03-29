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
    res.send(cards)
  })
});

router.get('/queueCards', (req, res, next) => {
  Cards.findAll({
    where: {
      Status: "Queue"
    }
  })
  .then(function(cards) {
    res.send(cards)
  })
})

router.get('/InProgressCards', (req, res, next) => {
  Card.findAll({
    where: {
      Status: "InProgress"
    }
  })
  .then(function(cards) {
    res.send(cards)
  })
})

router.get('/DoneCards', (req, res, next) => {
  Card.findAll({
    where: {
      Status: "InProgress"
    }
  })
  .then(function(cards) {
    res.send(cards)
  })
})

router.post('/newCard', (req, res, next) => {
  Cards.create({
    Title: req.body.Title,
    Priority: req.body.Priority,
    CreatedBy: req.body.CreatedBy,
    AssignedTo: req.body.AssignedTo,
    Status: "Queue"
  })
  .then(function(cards) {
    res.send(cards)
  })
});

module.exports = router;
