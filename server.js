const express = require('express');
const app = express();

const db = require('./db');
const Person = require('./modal/person');   
const port = 3000;

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL || 'mongodb://localhost:27017/My-hotels'; 

app.get('/', (req, res) => {
    res.send('Welcome to the Hotels App!');
});

app.post('/person', async (req, res) => {
 try {
 const newPersonData = req.body;
 const newPerson = new Person(newPersonData);
 // Save the new person to the database using await
 const savedPerson = await newPerson.save();
 console.log('Saved person to database');
 res.status(201).json(savedPerson);
 } catch (error) {
 console.error('Error saving person:', error);
 res.status(500).json({ error: 'Internal server error' });
 }
 })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


 

