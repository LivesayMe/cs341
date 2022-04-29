var express = require('express');
const mongodb = require('./mongodb');
var mongo = require('mongodb');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Anne Harley');
});

router.get('/contacts', async function(req, res, next) {
  const results = await mongodb.getDb().collection('contacts').find().toArray();
  res.send(results);
});

router.get('/contact', async function(req, res, next) {
  console.log(req.query.id);
  const results = await mongodb.getDb().collection('contacts').findOne({"_id": new mongo.ObjectId(req.query.id)});
  res.send(results);
});

module.exports = router;