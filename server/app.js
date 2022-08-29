let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');

let users = require('./routes/users');

let app = express();

app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({origin:true,credentials:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', users);

app.listen(process.env.PORT || 8080,()=>{console.log('backend listening')})

module.exports = app;
