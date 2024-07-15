const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const helthcareregschema = new Schema({
    id: { type: String },
    photo: { type: Array },
    empname: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String,},
    password: { type: String, },
    phoneno: { type: String, required: true },
    address: { type: String,  },
    place: { type: String, required: true },
    
});

const Helthcarereg = mongoose.model('Helthcarereg', helthcareregschema);

module.exports = {
    Helthcarereg
};
