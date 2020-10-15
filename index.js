var express = require('express')
var app = express()

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next(); // sans cette ligne on ne pourra pas poursuivre.
})



app.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'contact/html');

    response.end("<html><head><title>index</title></head><body><h1>Hello world</h1></body></html>");
})

app.use(function (req, res, next) {
    console.log("ensuite");
    next(); // sans cette ligne on ne pourra pas poursuivre.
})

app.get('/contact', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    response.end("<html><head><title>contact</title></head><body><h1>contact</h1></body></html>");
})

app.use(function (request,response) {
    console.log("et c'est le 404");

    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');

    response.end("<html><head><title>quatre cent quatre</title></head><body><h1>404</h1></body></html>");

})

app.listen(3000);
console.log("c'est parti")
