const express = require('express');
const bodyParser = require('body-parser');

const PeopleService = require('./people-service');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();
module.exports = app;

// To be implemented!
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1',v1);

v1.get('/people', async (request,response)=>{
   const data = await peopleService.getPeople();
   response.send(data);
});

v1.put('/people/:id', async (request,response) => {
    const id = parseInt(request.params.id);
    const people = request.body;
    let result = await peopleService.updatePeople(id, people);
    response.sendStatus(result ? 200 : 404);
});
