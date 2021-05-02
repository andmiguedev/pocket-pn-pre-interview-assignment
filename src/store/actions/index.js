import { AUTH_PATIENT } from '../types/auth';
import * as api from '../../api';

export const registerPatient = (patientInfo) => ({
   type: AUTH_PATIENT,
   payload: api.registerPatient(patientInfo)
})