import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  console.log('Listagem de usuaios');

  //JSON

  response.json(["Itamar","Sandra","Anna"]);
});

app.listen(3333);