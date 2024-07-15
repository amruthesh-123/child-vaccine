const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const addvaccineschema = new Schema({
    
    id: { type: String },
    vaccinetype: { type: String, required: true },
    manufacturer: { type: String, required: true},
    dosesrequired: { type: String,  },
    description: { type: String, required: true },
    agerange: { type: Array, required: true},
    healthid: { type:Schema.Types.ObjectId,ref:"Healthcare",require:true},

});

const Addvaccinereg = mongoose.model('Addvaccinereg', addvaccineschema);

module.exports = {
    Addvaccinereg
};