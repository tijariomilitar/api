const express = require('express');
const cors = require('cors');
const app = express();
let path = require('path');

const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/get', (req, res) => {
  res.json({ 'titulo': 'Uma noticia em get' });
});

app.post('/post', (req, res) => {
  res.json({ 'titulo': 'Uma noticia em post' });
});

app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});