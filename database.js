const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/satyam').then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => { console.error('Failed to connect to MongoDB', err);
});


const userSchema = new mongoose.Schema({
  name: {
    type: String,   
    required: true
  },
  email: {      
    type: String,   
    required: true, 
    unique: true    
    },  
    password: {     
    type: String,   
    required: true  
    }           
});                 


module.exports = mongoose.model('user' , userSchema)