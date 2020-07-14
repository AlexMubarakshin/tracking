const express = require('express');
const app = express();
const CookielessTracker = require('cookieless');
const cors = require('cors');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/track', function (req, res) {
  const tracker = new CookielessTracker(req, true);

  tracker.respond(res);
});

app.listen(PORT, function () {
  console.log(`Tracker app listening on port ${PORT}!`);
});

module.export = app;
