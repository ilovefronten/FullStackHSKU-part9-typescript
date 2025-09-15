import express, { NextFunction, Request, Response } from 'express';
import patientsService from '../services/patientsService';
import { NewPatient, NonSensitivePatientData, Patient } from '../types';
import { newEntrySchema } from '../utils';
import { z } from 'zod';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

const newPatientParser = (req: Request, _res: Response, next: NextFunction) => {
  try {
    newEntrySchema.parse(req.body);
    next();
  } catch (error: unknown) {
    next(error);
  }
};

const errorMiddleware = (error: unknown, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

router.post('/', newPatientParser, (req: Request<unknown, unknown, NewPatient>, res: Response<Patient>) => {
  const patientAdded = patientsService.addPatient(req.body);
  res.json(patientAdded);
});

router.use(errorMiddleware);

export default router;