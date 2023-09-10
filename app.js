const express = require('express');
const cors = require('cors');
const app = express();
let path = require('path');

const port = 5000;

app.use(cors());

app.get('/get', (req, res) => {
  res.json({ 'titulo': 'Uma noticia em get' });
});

app.post('/post', (req, res) => {
  res.json({ 'titulo': 'Uma noticia em post' });
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});