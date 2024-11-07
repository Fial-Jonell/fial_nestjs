const express = require('express');
const app = express();
const port = 9090;
const { getFibonacciSequence } = require('./Assignment1');

app.get('/assignments/fibonacci/:n', getFibonacciSequence);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
