import { AUTH_PATIENT } from "../types/index";

const INITIAL_STATE = {
   isAuthenticated: false,
   account: null,
   checkAuthentication: false,
}


// eslint-disable-next-line import/no-anonymous-default-export
export default function (state=INITIAL_STATE, action) {
   switch (action.type) {
      case AUTH_PATIENT:
         return {...action.payload, checkAuthentication: true }
      default:
         return state;
   }
}