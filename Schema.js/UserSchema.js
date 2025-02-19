const mongoose=require('mongoose');
const userSchema=new mongoose.schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    roles:{
        type:[String],
        default:['user']
    },
    profile: profileSchema,
    last

});

const User=mongoose.model('User',userSchema);
module.exports=User;