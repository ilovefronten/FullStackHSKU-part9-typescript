import { NewPatient, Gender } from './types';

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!isString(name)) {
    throw new Error('Invalid NAME input:' + name);
  }
  return name;
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error('Invalid DATE_OF_BIRTH input:' + dateOfBirth);
  }
  return dateOfBirth;
}

const parseSsn = (ssn: unknown): string => {
  if (!isString(ssn)) {
    throw new Error('Invalid SSN input:' + ssn);
  }
  return ssn;
}

const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(param)
}

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Invalid GENDER input:' + gender);
  }
  return gender;
}

const parseOccupation = (occupation: unknown): string => {
  if (!isString(occupation)) {
    throw new Error('Invalid OCCUPATION input:' + occupation);
  }
  return occupation;
}


const toNewPatientEntry = (obj: unknown): NewPatient => {
  if (!obj || typeof obj !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if ('name' in obj
    && 'dateOfBirth' in obj
    && 'ssn' in obj
    && 'gender' in obj
    && 'occupation' in obj
  ) {
    const newPatientEntry: NewPatient = {
      name: parseName(obj.name),
      dateOfBirth: parseDateOfBirth(obj.dateOfBirth),
      ssn: parseSsn(obj.ssn),
      gender: parseGender(obj.gender),
      occupation: parseOccupation(obj.occupation)
    };
    return newPatientEntry;
  } else {
    throw new Error('Missing field!');
  }
}

export default toNewPatientEntry;