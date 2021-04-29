import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';

class App extends Component {
   render() {
      return (
         <Router>
            <Switch>
               <Route
                  path={routes.register.path}
                  component={routes.register.component}
                  exact={true}
               />
            </Switch>
         </Router>
      )
   }
}

export default App;