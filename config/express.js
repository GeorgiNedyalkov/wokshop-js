const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.urlencoded( { extended: false } ));
    app.use(express.static(path.resolve(__basedir, 'static')));
    app.engine('.hbs', handlebars({ extname: '.hbs', defaultLayout: false}));
    app.set('views', path.resolve(__basedir, 'views'));

    //TODO: Setup the view engine
    //TODO: Setup the static files
    //TODO: Setup the body parser
};