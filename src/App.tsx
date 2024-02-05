import React, { useContext }        from 'react';

import { Context, ContextType }     from './context/Context';

import { Redirect, Route, Switch }  from 'react-router';
import LoginPage                    from './pages/LoginPage';
import UserPage                     from './pages/UserPage';

import { ROUTES }                   from './constants/routes';
import HomePage                     from './pages/HomePage';
import './App.css';

function App() {
  const { state } = useContext(Context) as ContextType

  return (
    <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        {!state.token &&<Route exact path={ROUTES.LOGIN} component={LoginPage}/>}
        {state.token && <Route exact path={ROUTES.USER} component={UserPage}/>}
        <Redirect exact from='*' to='/' />
    </Switch>
  )
}

export default App;
