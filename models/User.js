import { Schema, model } from "mongoose";

let collection='users'
let schema =new Schema({
    email: { type:String,require:true },
    password: { type:String,require:true },
    photo: { type:String, require:true },
    role: { type:Number,requie: true },
    online: { type:Boolean,default:false },
    verified: { type:Boolean,default:false },
    verify_code: { type:String, require:true }   
},{
    timestamps:true
})
let User= model(collection, schema)
export default User