import React from 'react'

export default function Cart({cart, catalogue, subtotal}) {
    if (cart.length === 0) {
        return null
    }

    function getName(id) {
        for(var i = 0; i < catalogue.length; i += 1) {
            if(catalogue[i]["id"] === id) {
                return catalogue[i]["name"]
            }
        }
    }

    // get names and prices
    const names = [];
    const prices = [];
    const quantities = [];
    cart.forEach((cartItem) => {
        for(var i = 0; i < catalogue.length; i += 1) {
            if(catalogue[i]["id"] === cartItem.id) {
                names.push(catalogue[i]["name"]);
                prices.push(catalogue[i]["price"]);
                quantities.push(cartItem.quantity);
            }
        }
    })

    return (
        <div className="column">
            <h3>CART</h3>
            { cart.map((cartItem) => {
                return(
                    <div className="row" key={cartItem.id}>
                        <h5>{getName(cartItem.id)}</h5>
                        <p>quantity: {cartItem.quantity}</p>
                    </div>
                )
            }) }
            <h4>
                Subtotal: ${subtotal}
            </h4>
        </div>
        
    )
}