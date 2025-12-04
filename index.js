
const express = require('express');
const app = express();
// const db =  require('./database');
// const User = require('./db');
const User = require('./modal/person');
const port = 3000;      


const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/users', async (req, res) => {
  try {
    const newUserData = req.body;
    const newUser = new User(newUserData);
    // Save the new user to the database using await
    const savedUser = await newUser.save();


    console.log('Saved user to database');
    res.status(200).json(savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/prople',async(req,res)=>{
  try{
    const newPersondata =req.body;
    const newPerson = new Person (newPersondata);
    const savedPerson = await newPerson.save();
    console.log('Saved person to database');
    res.status(201).json(savedPerson);  
  } catch (error) {
    console.error('Error saving person:', error);
    res.status(500).json({ error: 'Internal server error' });


  }
})


app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.status(200).json(users);
  }
  catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  } 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`); 
});