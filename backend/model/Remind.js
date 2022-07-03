import mongoose from "mongoose";

const Reminder = mongoose.Schema({
    title: {type:String,required:true},
    message: {type:String,required:true},
    sendtime: {type:String,required:true},
    userId: {type:String,required:true},
    status: {type:String,required:true}
},{timestamps:true})

export default mongoose.model('RemindData',Reminder)