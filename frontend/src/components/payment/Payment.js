import React, { Component/*, useState*/ } from 'react';
import propTypes from 'prop-types';

import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51HNocRLdpw1A1hobGjsmkITMCTC8EsjpOKIdyf6scmKRPvMUR8ZxTQgBM2HUN9sQEzghFneFvMSn63YDUXRrbbHx00WpUsNaPb');

const BACKEND_DOMAIN = "http://localhost:4242";

const handleCheckout = async (event) => {
    const stripe = await stripePromise;

    const response = await fetch(BACKEND_DOMAIN+"/create-session", {
        method: "POST"
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout
    const result = await stripe.redirectToCheckout({
        sessionId: session.id
    });

    if (result.error) {
        console.log(result.error.message)
    }
}

export class Payment extends Component {

    render() {
        let total = 0;
        this.props.breads.forEach(bread => {
            total += bread.selected ? bread.price : 0
        });
        // const total = this.props.breads.reduce((a, b) => a + parseInt(b.selected ? b.price : 0), 0);
        
        return (
            <div style={paymentStyle}>
                <span>Total: ${total}</span>
                <br />                
                <button className="btn pink" style={{margin: "10px"}} role="link" onClick={handleCheckout}>
                    Checkout
                </button>
            </div>
        )
    }
}

Payment.propTypes = {
    breads: propTypes.array.isRequired
}

const paymentStyle = {
    background: '#666',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Payment
