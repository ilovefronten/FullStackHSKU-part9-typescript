import express from 'express';
import patientsService from '../services/patientsService';
import { Response } from 'express';
import { NonSensitivePatientData } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

router.post('/', (req, res) => {
  const {
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  } = req.body;

  const patientAdded = patientsService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });
  
  res.json(patientAdded);
});

export default router;