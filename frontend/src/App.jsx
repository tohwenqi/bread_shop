import React from "react";
import Header from "./components/layout/Header";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe("pk_test_51HNocRLdpw1A1hobGjsmkITMCTC8EsjpOKIdyf6scmKRPvMUR8ZxTQgBM2HUN9sQEzghFneFvMSn63YDUXRrbbHx00WpUsNaPb");
export default function App() {
  return (
    <div className="App">
      <div className="Container">
          <div className="column">
            <Header /> 
            <div className="row">
            {/* Selection */}
            </div>
            <Elements stripe={promise}>
              <CheckoutForm />
            </Elements>
          </div>
      </div>
    </div>
  );
}