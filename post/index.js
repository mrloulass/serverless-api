'use strict';

const uuid = require('uuid').v4;

const dynamoose = require('dynamoose');

const peopleModel = require('../model/people.js');


exports.handler = async (event) => {

  try {
    const { name, location, phone } = JSON.parse(event.body);

    const id = uuid();

    const record = new peopleModel({ id, name, location, phone });
    const data = await record.create();

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

