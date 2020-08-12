const path = require('path');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('view engine', 'pug');
app.set('views', path.join(__dirname, `views`));
//middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
//parse requests
app.use(bodyParser.urlencoded({ extended: true }));
// Serving static files
app.use(express.json());

const indexRouter = require('./routes/index');
const contactRouter = require("./routes/contactRoutes");

app.use('/public', express.static('public'))
app.use('/', indexRouter);
app.use('/api/v1/contact', contactRouter);



//start server
module.exports = app;
