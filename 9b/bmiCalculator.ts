interface BmiValues {
  height: number;
  weight: number;
}

function parseBmiArguments(args: string[]): BmiValues {
  if (args.length < 4) {
    throw new Error('Too few args!');
  }
  if (args.length > 4) {
    throw new Error('Too many args!');
  }

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    };
  } else {
    throw new Error('args have wrong type!');
  }
}

function calculateBmi(height: number, weight: number): string {
  const bmi = weight / (height * 0.01 * height * 0.01);
  if (bmi < 18.5) {
    return "Under wight";
  } else if (bmi >= 30) {
    return "Obese";
  } else {
    return "Normal weight";
  }
}

if (require.main === module) {
  try {
    const { height, weight } = parseBmiArguments(process.argv);
    console.log(calculateBmi(height, weight));
    
  } catch (error:unknown) {
    let errorMsg = "Something bad happened.";
    if (error instanceof Error) {
      errorMsg += ' Error:' + error.message;
    }
    console.log(errorMsg);
  }
}


export default calculateBmi;