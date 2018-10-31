const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
// var app2 = require('http').createServer()
// var io = module.exports.io = require('socket.io')(app2);
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
// const SocketManager = require('./SocketManager');
// io.on('connection', SocketManager); 

const db = require('./models');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'kevAidDavVer',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto', maxAge: 99999 },
  }),
);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// Define API routes here

const routes = require('./routes/api.js');
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({ force: false  }).then(function() {
  app.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
