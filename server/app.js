let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let cors = require('cors');
let morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

let users = require('./routes/users');

let app = express();

mongoose.connect('mongodb+srv://justasAdmin:'+process.env.MONGODB_PASSW+'@Cluster.regvrf2.mongodb.net/?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true })
    .then((res)=>{console.log('mongoDB connected')})


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
