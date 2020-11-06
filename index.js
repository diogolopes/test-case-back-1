const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./app/routes');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//app.options('*', cors());

app.use('/', routes);
app.listen(3000);