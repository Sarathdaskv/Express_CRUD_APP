const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const bodyParser = require('body-parser');
const path=require('path');

const app=express();

dotenv.config({path:'config.env'});
const PORT=process.env.PORT||8080;

//app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({extended:true}));

//app.use('/css',express.static(path.resolve(__dirname,"./assets/css")));
app.use('/js',express.static(path.resolve(__dirname,"./assets/js")));

app.set("view engine","ejs");



app.use('/',require('./server/routes/router.js'));

app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`);
});