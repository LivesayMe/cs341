var express = require('express');
const mongodb = require('./mongodb');
var mongo = require('mongodb');
var router = express.Router();



router.get('/', async function(req, res, next) {
  const results = await mongodb.getDb().collection('contacts').find().toArray();
  res.send(results);
});

router.get('/contacts', async function(req, res, next) {
  const results = await mongodb.getDb().collection('contacts').find().toArray();
  res.send(results);
});

router.get('/contacts/:id', async function(req, res, next) {
  const results = await mongodb.getDb().collection('contacts').findOne({"_id": new mongo.ObjectId(req.params.id)});
  res.send(results);
});

//POST request to add a contact to the contacts collection in the database (firstName, lastName, email, favoriteColor, birthday, city, address, phone number)
router.post('/contacts', async function(req, res, next) {
  const results = await mongodb.getDb().collection('contacts').insertOne(req.body);
  res.send(results);
});

//Put request to update a contact in the contacts collection
router.put('/contacts/:id', async function(req, res, next) {
  if(req.params.id == null){
    res.send("Please enter a valid ID");
  }
  const results = await mongodb.getDb().collection('contacts').updateOne({"_id": new mongo.ObjectId(req.params.id)}, {$set: req.body});
  res.send(results);
});

//Delete request to delete a contact from the contacts collection
router.delete('/contacts/:id', async function(req, res, next) {
  if(req.params.id == null){
    res.send("Please enter a valid ID");
  }
      const results = await mongodb.getDb().collection('contacts').deleteOne({"_id": new mongo.ObjectId(req.params.id)});
  res.send(results);
});

module.exports = router;