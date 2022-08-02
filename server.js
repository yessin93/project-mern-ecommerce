const express = require ("express");
const connecDB = require("./config/connectDB");
const user = require('./routes/user');
const product = require('./routes/product');

const app = express();
app.use(express.json());
app.use('/user',user);
app.use('/product' , product);


connecDB();



app.listen(8000,err=>err?console.error(err):console.log("server running on port 8000"));