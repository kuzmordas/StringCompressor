'use strict'
let express = require('express');
let path = require('path');
let bodyParser = require('body-parser');
let routes = require('./controllers/controller');
let swaggerConfig = require('./swaggerConfig');

const server = express();

server.use(function (req, res, next) {
    let allowedOrigins = ['http://127.0.0.1:8080', 'http://localhost:8080', 'http://127.0.0.1:3000', 'http://localhost:3000'];
    let origin = req.headers.origin;
    if(allowedOrigins.indexOf(origin) > -1){
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
});

server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, '')));
server.use('/', routes);

server.get('/swagger.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerConfig);
});

server.listen(3000, () => {
    console.log('start server on localhost:3000');
});
