import express from 'express';
import calculateBmi from './bmiCalculator';
import calculateExercise from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  console.log();

  const bmiInfo = {
    height,
    weight,
    bmi: calculateBmi(height, weight)
  };
  res.json(bmiInfo);
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const body: any = req.body;

  if (!body.daily_exercises || !body.target) {
    return res.status(400).json({
      error: "parameters missing"
    });
  }

  if (isNaN(Number(body.target))) {
    return res.status(400).json({
      error: "malformatted parameters"
    });
  }

  // daily_exercises 是否全是数字
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!Array.isArray(body.daily_exercises) || body.daily_exercises.some((d: any) => isNaN(Number(d)))) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  const { target, daily_exercises } = req.body;
  const targetDays: number = Number(target);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const exerciseRecord: number[] = daily_exercises.map((d: any) => Number(d));
  return res.json(calculateExercise(targetDays, exerciseRecord));

});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});