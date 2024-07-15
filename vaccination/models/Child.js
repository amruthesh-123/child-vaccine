const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const childregschema = new Schema({
    parentid: { type:Schema.Types.ObjectId,ref:"Parent",require:true},
    id: { type: String },
    photo: { type: Array },
    empname: { type: String, required: true },
    Role: { type: String, required: true},
    dateofbirth: { type: String,  },
    medicalhistory: { type: String, required: true },
    vaccineid: { type:Schema.Types.ObjectId,ref:"Vaccinebook",require:true},
    healthid: { type:Schema.Types.ObjectId,ref:"Helthcare",require:true},

    
});

const Childreg = mongoose.model('Childreg', childregschema);


module.exports={
    Childreg
}