import { Schema, model,Types } from "mongoose";

let collection='chapters'
let schema= new Schema({
manga_id:{
    type:Types.ObjectId,
    ref:'mangas'
},
title:{type:String, require:true},
cover_photo:{type:String, require:true},
pages:{type:Array},
order:{type:Number}
},{
    timestamps:true})

const Chapter = model(collection, schema)
export default Chapter