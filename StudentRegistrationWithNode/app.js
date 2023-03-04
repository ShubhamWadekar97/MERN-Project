

require('dotenv').config();
require('./database/mongodb');
const express= require('express');
const cors=require('cors');
const app = express();
app.set('view engine','ejs');
const bodyParser = require('body-parser');

app.use(cors());
const studentR=require('./routes/studentRoute');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use('/students',studentR);



app.listen(process.env.PORT ,()=>{
    console.log("Running");
})