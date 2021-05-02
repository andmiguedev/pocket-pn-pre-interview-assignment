import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import ReduxStore from './store/index';

class App extends Component {
   render() {
      return (
         <Provider store={ReduxStore()}>
            <Router>
               <Switch>
                  <Route
                     path={routes.patientForm.path}
                     component={routes.patientForm.component}
                     exact={true}
                  />
                  <Route
                     path={routes.makeAppointment.path}
                     component={routes.makeAppointment.component}
                     exact={true}
                  />
                  <Route
                     path={routes.recentAppointments.path}
                     component={routes.recentAppointments.component}
                     exact={true}
                  />
               </Switch>
            </Router>
         </Provider>
      )
   }
}

export default App;