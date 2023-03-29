import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';

function App() {
  return (
    <main className="App">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <FormProvider>
        <Switch>
          <Route exact path="/login" component={ Login } />
        </Switch>
      </FormProvider>
    </main>
  );
}

export default App;
