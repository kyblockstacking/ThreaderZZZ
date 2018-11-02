const express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
var server = require('http').createServer(app);
var io = (module.exports.io = require('socket.io')(server));
// var io = module.exports.io = require('socket.io').listen(server);
// <-- include either the top or bottom -->
// var io = require('socket.io').listen(server);
users = [];
connections = [];
const SocketManager = require('./SocketManager.js');
io.on('connection', SocketManager);

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
const loginSystem = require('./routes/loginSystem.js');
app.use(loginSystem);
const votingSystem = require('./routes/votingSystem.js');
app.use(votingSystem);

// Send every other request to the React app
// Define any API routes before this runs
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

db.sequelize.sync({ force: false }).then(function() {
  server.listen(PORT, () => {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
