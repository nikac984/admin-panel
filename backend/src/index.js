const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, Admin Panel!');
});

app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

