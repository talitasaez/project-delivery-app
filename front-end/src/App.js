import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <main className="App">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <FormProvider>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
        </Switch>
      </FormProvider>
    </main>
  );
}

export default App;
