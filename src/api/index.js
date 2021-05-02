import firebase from 'firebase/app';
import 'firebase/auth';

import { patientsCollection } from '../database/firebase';

export const registerPatient = async ({
   name, email, password, contact, reason
}) => {
   try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      const { user } = response;

      const patientProfile = {
         uid: user.uid,
         name: name,
         email: email,
         password: password,
         contact: contact,
         reason: reason,
         role: 1
      };

      await patientsCollection.doc(user.uid).set(patientProfile);
      return {
         isAuthenticated: true,
         account: patientProfile
      }

   } catch (error) {
      return { error: error.message }
   }
}