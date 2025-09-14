import { NewPatient, NonSensitivePatientData, Patient } from '../types';
import patientData from '../../data/patients';
import { v1 as uuid } from 'uuid';

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
  return patientData.map(p => ({
    id: p.id,
    name: p.name,
    dateOfBirth: p.dateOfBirth,
    gender: p.gender,
    occupation: p.occupation
  }));
};

const addPatient = (newPatient: NewPatient): Patient => {
  const newPatientWithId: Patient = {
    id: uuid(),
    ...newPatient
  };
  patientData.push(newPatientWithId);
  return newPatientWithId;
};

export default { 
  getNonSensitivePatientData, 
  addPatient 
};