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
  Cards.findAll({
    where: {
      Status: "InProgress"
    }
  })
  .then(function(cards) {
    res.send(cards)
  })
})

router.get('/DoneCards', (req, res, next) => {
  Cards.findAll({
    where: {
      Status: "Done"
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
    Status: req.body.Status
  })
  .then(function(cards) {
    res.send(cards)
  })
});

router.put('/editCard/:id', (req, res, next) => {
  Cards.update({
    Status : req.body.Status
  },
  { where: {
    id : {id: `${req.params.id}`}
  }}
  )
  .then(function(cards) {
    res.end()
  })
})

router.delete('/deleteCard/:id', (req, res) => {
  Cards.destroy(
  {
    where: {id: `${req.params.id}`}
  }
  )
  .then(function () {
    res.end();
  });
});

module.exports = router;
