import express from 'express';

const app = express();

const PORT = 3001;

const BASE_URL = '/api';

app.get(`${BASE_URL}/ping`, (_req, res) => {
  console.log('get pinged.');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}!`);
});