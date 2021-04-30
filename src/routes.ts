/* eslint-disable import/no-anonymous-default-export */
import RegisterPage from './pages/register/register';
import LoginPage from './pages/login/login';
import MakeAppointment from './pages/appointments/make-appointment';

export default {
   register: { path: '/register', component: RegisterPage },
   login: { path: '/login', component: LoginPage },
   makeAppointment: { path: '/make-appointment', component: MakeAppointment}
}