import express from 'express';
import patientsService from "../services/patientsService"
import { Response } from 'express'
import { NonSensitivePatientData } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<NonSensitivePatientData[]>) => {
  res.send(patientsService.getNonSensitivePatientData());
});

export default router;