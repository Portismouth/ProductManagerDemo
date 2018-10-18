const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

app.use(express.static(__dirname + '/client/dist/client'));
// Set Global promise object
mongoose.Promise = global.Promise;
// Set server to process json
app.use(bodyParser.json());

require('./server/config/mongoose.js');
//Set routes
const routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
  console.log('listening on port 8000');
});
app.all('*', (req, res, next) => {
  res.sendFile(path.resolve('./client/dist/client/index.html'));
});
