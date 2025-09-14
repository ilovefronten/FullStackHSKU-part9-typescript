import express from 'express';
import diagnosesRouter from './routes/diagnoses'

const app = express();
app.use(express.json())
app.use('/api/diagnoses', diagnosesRouter)

const PORT = 3001;

const BASE_URL = '/api';

app.get(`${BASE_URL}/ping`, (_req, res) => {
  console.log('get pinged.');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}!`);
});