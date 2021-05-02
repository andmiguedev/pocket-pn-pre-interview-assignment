/* eslint-disable import/no-anonymous-default-export */
import PatientForm from './pages/patient/patientForm';
import MakeAppointment from './pages/appointments/make-appointment';
import RecentAppointments from './pages/appointments/recent-appointments';


export default {
   patientForm: { path: '/patientForm', component: PatientForm },
   makeAppointment: { path: '/make-appointment', component: MakeAppointment },
   recentAppointments: { path: '/recent-appointments', component: RecentAppointments}
}