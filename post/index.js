'use strict';

const uuid = require('uuid').v4;

const dynamoose = require ('dynamoose');

const peopleSchema = new dynamoose.Schema({
  'id': String,
  'name': String,
  'location': String,
  'phone': String
});

const peopleModel = dynamoose.model('PeopleTable', peopleSchema);

exports.handler = async (event) => {
console.log('Testing',event);
  try {
    const { name, location, phone } = JSON.parse(event.body);

    const id = uuid();

    const record = new peopleModel({ id, name, location, phone });
    const data = await record.save();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      response: e.message,
    };

  }
};

