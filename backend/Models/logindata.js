import mongoose from 'mongoose';
 
const loginStructure= new mongoose.Schema({
Name:String,
Email:String,
Password:String,
Confirmpass:String,
});
const loginStructureModel=mongoose.model('Customer',loginStructure);
export default loginStructureModel;