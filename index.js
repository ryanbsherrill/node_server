const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.send({hello: 'world!'});
});

const PORT = process.env.PORT || 8080;

server.listen(PORT,() => {
  console.log(`Server is up on port ${PORT}`);
});
