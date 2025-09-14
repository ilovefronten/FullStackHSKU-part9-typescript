import express from 'express';
import patientsService from '../services/patientsService';
import { Response } from 'express';
import { NonSensitivePatientData } from '../types';
import toNewPatientEntry from '../utils'

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body)
    const patientAdded = patientsService.addPatient(newPatientEntry);
    res.json(patientAdded);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;