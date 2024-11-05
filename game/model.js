const mongoose=require('mongoose');
const signUpSchema=new mongoose.Schema({
    user:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    password:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    }
})
const regSchema=new mongoose.Schema({
    event_name:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    game_name:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    },
    username:{
        type:String,
        required:[true,"this field can't be empty"],
        trim:true
    }
})
const signUpModel=mongoose.model('SignUpData',signUpSchema);
const regModel=mongoose.model('RegData',regSchema);

module.exports={
    signUpModel,
    regModel
}