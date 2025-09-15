import { NewPatient, Gender } from './types';
import { z } from 'zod';

export const newEntrySchema = z.object({
  name: z.string(),
  dateOfBirth: z.iso.date(),
  ssn: z.string(),
  gender: z.enum(Gender),
  occupation: z.string()
});


export const toNewPatientEntry = (obj: unknown): NewPatient => {
  return newEntrySchema.parse(obj);
};