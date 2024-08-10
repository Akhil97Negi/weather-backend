const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();

const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();


app.use(express.json());
app.use(middlewares);
app.use('/api', router); 

// A basic route to test the server
app.get('/', (req, res) => {
  res.send('Weather Backend API is running!');
});


const PORT = process.env.PORT || 5670;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
