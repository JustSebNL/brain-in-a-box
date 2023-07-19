const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(handle);
  server.use(express.static(path.join(__dirname, 'public')));

  server.listen(process.env.PORT || 3000);
});

module.exports = server;