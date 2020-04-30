const express = require('express');
// const handlebars = require('express-handlebars');
// const bodyParser = require('body-parser');

const port = 4200;

module.exports = (app) => {
    
    //TODO: Setup the view engine
    app = express();

    app.get('/', (req, res) => {
        res.status(200);
        res.send('Created an express app.');
    });

    app.listen(port, () => {
        console.log(`Express running on port ${port}...`);
    });


    //TODO: Setup the body parser

    //TODO: Setup the static files

};