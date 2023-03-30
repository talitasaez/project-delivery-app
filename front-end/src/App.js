import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Products from './pages/Products';
import './App.css';
import FormProvider from './context/FormProvider';
import Login from './pages/Login';

function App() {
  return (
    <main className="App">
      {/* <Switch>
        <Route exact path="/customer/products" component={ Products } />
      </Switch> */}
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <FormProvider>
        <Switch>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/customer/products" component={ Products } />
        </Switch>
      </FormProvider>
    </main>
  );
}

export default App;
