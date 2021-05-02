import { AUTH_PATIENT } from '../types/index';
import * as api from '../../api';

export const registerPatient = (patientInfo) => ({
   type: AUTH_PATIENT,
   payload: api.registerPatient(patientInfo)
})