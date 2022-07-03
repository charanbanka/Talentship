import mongoose from 'mongoose';

const userfortalenship = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phno:{type:Number,required:true}
},
{   timestamps:true }
)

export default mongoose.model('userTalentship',userfortalenship)