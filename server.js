let express = require('express'),
    app = express(),
    logger = require('morgan'),
    bodyParser = require('body-parser');

app.use(logger('dev'))
    .use(bodyParser.urlencoded({
        extended: true
    }))
    .use(bodyParser.json())
    .use(express.static(__dirname + '/public'));

// routes
let routes = require('./config/routes');
routes(app);

app.listen(3000, () => {
    console.log("Server OK!")
})