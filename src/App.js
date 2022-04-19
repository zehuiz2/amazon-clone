import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51KpfxzBEesaz5ik8ZA97ag1poHgKRRLmPdHKmXVGsoi9i5uO2jhMQpSV3098blttyAGNkIT96D6pWmxTmMnkyMl600tLzPYcLB');

function App() {

  const [{}, dispath] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);
      if (authUser){
        //the user just logged in/the user was logged in
        dispath({
          type: 'SET_USER',
          user: authUser
        })
      }
      //user logged out
      else{
        dispath({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          {/* Checkout Route */}
          <Route path="/checkout" element={[<Header />, <Checkout />]}/>
          {/* Login Page Route */}
          <Route path="/login" element={[<Login />]}/>
          {/* Payment */}
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}> <Payment /> </Elements>]} />
          {/* Orders */}
          <Route path='/orders' element={[<Header />, <Orders />]} />
          {/* Home Page Route, default always at the bottom */}
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
