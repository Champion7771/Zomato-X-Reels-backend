const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
    name: {
        type: String,   // ✅ remove quotes
        required: true,
    },
    email: { 
        type: String,   // ✅ remove quotes
        required: true,
        unique: true
    },
    password: {
        type: String,   
        required: true
    }
});

const foodPartnerModel = mongoose.model('foodpartner', foodPartnerSchema);

module.exports = foodPartnerModel;
