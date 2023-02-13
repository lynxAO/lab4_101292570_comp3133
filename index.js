const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./Routes/userAPI')

const app = express()
app.use(express.json())

mongoose.connect('mongodb+srv://Beaver:Q83asMaI8jrWaxFr@lab4cluster.htjwxtf.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log('Success Mongodb connection')
}).catch(err => {
  console.log('Error Mongodb connection')
});


app.use(userRoute);

app.listen(3000, () => { console.log('Server is running...') });