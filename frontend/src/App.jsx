import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/layout/Header";
import Selection from "./components/selection/Selection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import "./App.css";
import axios from 'axios';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HNocRLdpw1A1hobGjsmkITMCTC8EsjpOKIdyf6scmKRPvMUR8ZxTQgBM2HUN9sQEzghFneFvMSn63YDUXRrbbHx00WpUsNaPb");
const BACKEND_DOMAIN = 'http://localhost:4242'
export default function App() {
  const [catalogue, setCatalogue] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    async function fetchCatalogue() {
      const response = await axios(BACKEND_DOMAIN + "/shop");
      setCatalogue(response.data.bread);
    }
    fetchCatalogue();
  }, []);
  return (
    <Router>
      <div>
        <Header /> 
        <Switch>
          <Route path='/home'>
            <Selection catalogue={catalogue} cart={cart} setCart={setCart} />
            <div className="center">
              <Link to="/payment">
                <button className="waves-effect waves-light btn">
                  Checkout
                </button>
              </Link>
            </div>
          </Route>
          <Route path='/payment'>
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
            <div className="center">
              <Link to="/home">
                <button className="waves-effect waves-light btn">
                  Back to selection
                </button>
              </Link>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
    // <div className="App">
    //   <div className="Container">
    //       <div className="column">
    //         <Elements stripe={promise}>
    //           <CheckoutForm />
    //         </Elements>
    //       </div>
    //   </div>
    // </div>
  );
}