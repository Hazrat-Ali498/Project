import mongoose from 'mongoose';
 
const productStructure= new mongoose.Schema({
category:String,
Type:String,
productName:String,
productPrice:Number,
brand:String,
productImage:{
    type:String,
}
});
const productStructureModel=mongoose.model('eliteheaven',productStructure);
export default productStructureModel;