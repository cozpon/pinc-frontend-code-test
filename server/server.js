const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const session = require('express-session');
const redis = require('connect-redis')(session);
const path = require('path');
const PORT = process.env.PORT || 8888;

const app = express();

app.use(function (req, res, next) { // allowing front end to talk to back end
  res.setHeader('Access-Control-Allow-Origin', 'localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(compression());
// enabling json body-parser and encoding
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(session({
  store: new redis(),
  secret: 'keyboard cat',
  resave: false,
  saveInitialized: false
}));

app.listen(PORT, () => {

  console.log(`Server listening on port: ${PORT}`);
});

