import { Schema, model, Types } from "mongoose";

let collection='categories'
let schema= new Schema({
name:{type:String , require:true},
color:{type:String},
hover:{type:String},
description:{type:String, require:true},
character_photo:{type:String},
cover_photo:{type:String, require:true},
admin_id:{
   type:Types.ObjectId,
   ref:'users'
}
},{
   timestamps:true 
})

const Category =model(collection, schema)
export default Category