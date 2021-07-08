'use strict';

const dynamoose = require ('dynamoose');

const peopleModel = new dynamoose.Schema({
  'id': String,
  'name': String,
  'location': String,
  'phone': String
});

module.exports = dynamoose.model('PeopleTable', peopleModel);
