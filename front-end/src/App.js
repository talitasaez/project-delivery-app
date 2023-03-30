import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './pages/Products';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/customer/products" component={ Products } />
      </Switch>
    </main>
  );
}

export default App;
