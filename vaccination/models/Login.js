const mongoose=require('mongoose')
const Schema=mongoose.Schema
const loginschema=new Schema({
    id:{type:String},
    username:{type:String},
    password:{type:String},
    role:{type:String,required:true}
})

const  login=mongoose.model('login',loginschema)

module.exports={
    login
}
