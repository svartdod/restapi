const express =require('express');
const app =express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
require('dotenv/config');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.connect(process.env.DB_CONNECTION
    , {useNewUrlParser: true, useUnifiedTopology: true},()=>{console.log('connected')})
    

    
    
// routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);


app.get('/',(req,res)=>
{
    res.send("HOME");
})




// database 

// server side 
app.listen(3000);
