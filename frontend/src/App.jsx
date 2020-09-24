import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import Selection from "./components/selection/Selection";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
import axios from 'axios';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HNocRLdpw1A1hobGjsmkITMCTC8EsjpOKIdyf6scmKRPvMUR8ZxTQgBM2HUN9sQEzghFneFvMSn63YDUXRrbbHx00WpUsNaPb");
const BACKEND_DOMAIN = 'http://localhost:4242'
export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(BACKEND_DOMAIN + "/shop");
      setData(response.data.bread);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="Container">
          <div className="column">
            <Header /> 
            <Selection data={data} />
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
          </div>
      </div>
    </div>
  );
}