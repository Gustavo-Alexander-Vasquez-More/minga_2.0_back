import { Schema, model, Types } from "mongoose";

const collection= 'authors'
const schema= new Schema({
name:{type:String,require:true},
last_name:{type:String},
city:{type:String},
contry:{type:String},
date:{type:String},
photo:{type:String, require:true},
user_id:{
    type:Types.ObjectId,
    ref:'users',
    
},
active:{type:Boolean, default:false}
},{
    timestamps:true
})

const Author=model(collection, schema)
export default Author