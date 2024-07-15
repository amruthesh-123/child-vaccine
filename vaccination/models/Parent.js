const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const parentregschema = new Schema({
    id: { type: String },
    photo: { type: Array },
    empname: { type: String, required: true },
    email: { type: String, required: true },
    dateofbirth: { type: Date, required: true },
    maritalstatus: { type: String, required: true },
    username: { type: String,},
    password: { type: String, },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phoneno: { type: String, required: true },
    housename: { type: String, required: true },
    place: { type: String, required: true },
    post: { type: String, required: true },
    pincode: { type: String, required: true }
});

const Parentreg = mongoose.model('Parentreg', parentregschema);

module.exports={
    Parentreg
}