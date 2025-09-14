import { NonSensitivePatientData } from '../types';
import patientData from '../../data/patients'

const getNonSensitivePatientData = (): NonSensitivePatientData[] => {
  return patientData.map(p => ({
    id: p.id,
    name: p.name,
    dateOfBirth: p.dateOfBirth,
    gender: p.gender,
    occupation: p.occupation
  }));
}

export default { getNonSensitivePatientData }