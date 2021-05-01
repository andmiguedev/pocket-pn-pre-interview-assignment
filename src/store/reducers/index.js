import { combineReducers } from 'redux';

import auth from './authentication';

const appReducers = combineReducers({
   auth
});

export default appReducers;