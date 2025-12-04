

const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },  
    category: {
        type: String,
        enum: ['appetizer', 'main course', 'dessert', 'beverage'],
        required: true
    },  
    available: {
        type: Boolean,  
        default: true
    }
});

// Create model (collection name will be pluralized to 'menuitems')
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
