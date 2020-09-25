import React, { useState } from 'react'

export default function SelectionItem({bread, setCart}) {
    const [count, setCount] = useState(0);

    function decrementCount(e) {
        e.preventDefault();
        if (count === 0) { return }
        setCount((prevCount) => (prevCount - 1));
        setCart((prevCart) => {
            return (
                prevCart.map((cartItem) => {
                    if (cartItem.id === bread.id) {
                        cartItem.quantity = cartItem.quantity - 1
                    }
                    return cartItem
                })
            )
        })
    }

    function incrementCount(e) {
        e.preventDefault();
        setCount(prevCount => prevCount + 1);
        setCart((prevCart) => {
            const found = prevCart.some(cartItem => cartItem.id === bread.id);
            if (!found) {
                prevCart.push({
                    id: bread.id,
                    quantity: 0
                });
            }
            return (
                prevCart.map((cartItem) => {
                    if (cartItem.id === bread.id) {
                        cartItem.quantity = cartItem.quantity + 1
                    }
                    return cartItem
                })
            )
        })
    }

    return (
        <div className="col s4">
            <div className="center">
                <h5>{bread.name}</h5>
                <img src={`http://localhost:4242/public/Images/${bread.imgName}`} alt={bread.name} width="200" height="200"/>
                <p className="light">${bread.price/100}</p>
                <button className="btn-floating waves-effect waves-light btn-small" style={{"marginRight":"10px"}} onClick={decrementCount}>-</button>
                <span>{count}</span>
                <button className="btn-floating waves-effect waves-light btn-small" style={{"marginLeft":"10px"}} onClick={incrementCount}>+</button>
            </div>
        </div>
        
    )
}
