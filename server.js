const express = require('express');
const mongoose =require('mongoose');
const morgan = require ('morgan');
const path= require ('path');

const app = express();

const PORT= process.env.port || 8888;

const router = require ('./routes/api')

// const MONGODB_URI= "mongodb+srv://arun-bakery:arunjoshua@cluster0.xenge.mongodb.net/bakery_db?retryWrites=true&w=majority";

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/bakery_db',{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
//arun-bakery, arunjoshua
mongoose.connection.on('connected',()=>{
  console.log('Mongoose is connected...')
});

//data
// const data={
//   name: "Short Cake",
//   price:25,
//   imageurl: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/05/easy-homemade-strawberry-shortcake-4.jpg" 
// }

// const newBakery = new Bakery(data);

// newBakery.save((err)=>{
//   if(err){
//     console.log ("Oops something went wrong... ");
//   }
//   else{
//     console.log("Data has been saved... ")
//   }
// });


//Data Parsing
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(morgan('tiny'))
app.use ('/api',router)

//step 3

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('bakery-owner-client/build'));
}


app.listen (PORT,console.log(`Server is running on port ${PORT}...`));

