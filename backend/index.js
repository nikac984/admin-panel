const express = require('express');
const app = express();
const port = 3000;

app.get('/api/test', (req, res) => {
  res.send('Hello, this is a test endpoint!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

