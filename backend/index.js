import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import addProductDetails from './Routes/shopproductsdata.js'
import loginData from './Routes/logindata.js'

const app = express();
const url = "mongodb+srv://hali:fa21090@cluster0.n4moluc.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url,{useNewUrlParser: true, UseUnifiedTopology:true})
.then(() => console.log("Successfully connected to Data Base"));
app.listen(5000);

app.use(cors());
app.use(bodyParser.json({extended : true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/Add_Form', addProductDetails);
app.use('/View_Form', addProductDetails);
app.use('/Registration', loginData);
app.use('/Update_Form', loginData);
app.use("/Images",express.static("Images"));
app.use('/Login', loginData);
