
import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Customer from './components/CustomerPage/CustomerPage';
import Order from './components/OrderPage/OrderPage'
import './App.css';

function App() {
return (
  <>
  <div>
  <BrowserRouter>
  <div>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={Customer}  />
          <Route exact path="/CustomerPage" component={Customer}  />
                <Route exact path="/OrderPage" component={Order}  />

    </Switch>
  </div>
</BrowserRouter>
</div>
  </>
);
}

export default App;
