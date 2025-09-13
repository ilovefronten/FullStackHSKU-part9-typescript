interface Summary {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

function calculateTrainingDays(exerciseRecord: number[]): number {
  return exerciseRecord.filter(day => day > 0).length;
}

function ifSuccess(exerciseRecord: number[], targetDays: number): boolean {
  const sum = exerciseRecord.reduce((prev, next) => prev + next, 0);
  return (sum / exerciseRecord.length >= targetDays);
}

function calculateRating(exerciseRecord: number[], targetDays: number): number {
  switch (ifSuccess(exerciseRecord, targetDays)) {
    case true:
      return 3;
    default:
      return 2;
  }
}

interface StandardInput {
  targetDays: number;
  exerciseRecord: number[];
}

function parseArguments(args: string[]): StandardInput {
  if (args.length < 4) {
    throw new Error('Not enough arguments');
  }

  args.slice(2).forEach(arg => {
    if (isNaN(Number(arg))) {
      throw new Error('Provided values were not numbers!');
    }
  });

  const exerciseDataInput = args.slice(3)
  return {
    targetDays: Number(args[2]),
    exerciseRecord: exerciseDataInput.map(Number)
  };
}

function calculateExercise(args: string[]): Summary {

  const { targetDays, exerciseRecord } = parseArguments(args)

  return {
    periodLength: exerciseRecord.length,
    trainingDays: calculateTrainingDays(exerciseRecord),
    success: ifSuccess(exerciseRecord, targetDays),
    rating: calculateRating(exerciseRecord, targetDays),
    ratingDescription: 'blabla...',
    target: targetDays,
    average: (exerciseRecord
      .reduce((prev, next) => prev + next, 0)) / exerciseRecord.length,
  }
}

try {
  console.log(calculateExercise(process.argv))
} catch (error: unknown) {
  let errorMsg = 'Something bad happened.'
  if (error instanceof Error) {
    errorMsg += ' Error: ' + error.message
  }
  console.log(errorMsg);
  
}