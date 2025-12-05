// const mongoose = require('mongoose');

// // optional: suppress strictQuery warning in newer mongoose versions
// // mongoose.set('strictQuery', false);

// const mongoURL = 'mongodb://127.0.0.1:27017/hotelsApp'; 

// (async () => {
//   try {
//     await mongoose.connect(mongoURL); 
//     console.log('Connected to MongoDB successfully');
//   } catch (err) {
//     console.error('Failed to connect to MongoDB:', err);
//     // helpful tip: if you want the process to exit on DB failure:
//     // process.exit(1);
//   }
// })();

// // Define schema and model (can be defined before or after connect)
// const userSchema = new mongoose.Schema({
// //   name: {
// //     type: String,
// //     required: true
// //   },
// //   email: {
// //     type: String,
// //     required: true,
// //     unique: true
// //   },
// //   password: {
// //     type: String,
// //     required: true
// //   }
// });

// // Create model (collection name will be pluralized to 'users')
// module.exports = mongoose.model('User', userSchema);


const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/My-hotels').then(() => {
//   console.log('Connected to MongoDB');
// } ).catch((err) => { console.error('Failed to connect to MongoDB', err);
// }); 

const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/My-hotels'; 

// mongoose.connect('mongodb+srv://codewithsatyam05_db_user:BEcgj4Z1o9hm66Jm@hotels.kls8yix.mongodb.net/').then(() => {
//   console.log('Connected to MongoDB');
// } ).catch((err) => { console.error('Failed to connect to MongoDB', err);
// }); 

const userSchema = new mongoose.Schema({
  name: { 
        type: String,
        required: true
    },  
    age: {
        type: Number,
        required: true
    } ,
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manger'],
        required: true
    } ,
    
     mobile:{
            type: String,
            required: true
        },
    
    email: {
        type: String,
        required: true,
        unique: true
    } ,
    address:{
        type: String,
        required: true  
    } ,
    salary:{
        type: Number,
        required: true  

    }
});

module.exports = mongoose.model('User',userSchema);

