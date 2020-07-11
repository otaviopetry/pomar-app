const express = require('express');
const cors = require('cors');
const path = require('path');

// import routes
const routes = require('./routes');

// create express instance
const app = express();

// express settings
app.use(cors());
app.use(routes);

// media routes
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use('/journey/badges', express.static(path.resolve(__dirname, '..', 'journey/badges')));

// node port
app.listen(3333, () => {
    console.log('🚀 Server is up and running, dude :D');
})