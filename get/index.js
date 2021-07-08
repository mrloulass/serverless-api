'use strict';

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    'id': String,
    'name': String,
    'location': String,
    'phone number': String,
});

// first arguement, tells dynamoose what table to connect to
const peopleModel = dynamoose.model('PeopleTable', schema);

exports.handler = async (event) => {

    let list;

    if (event.pathParameters) {
        const id = event.pathParameters.id;
        list = await peopleModel.query('id').eq(id).exec();
    } else {
        list = await peopleModel.scan().exec();
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(list),
    };
    return response;
};
