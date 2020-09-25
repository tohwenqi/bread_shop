import React from 'react'

export default function SelectionItem({bread, cart, setCart, catalogue, setSubtotal}) {

    function decrementCount(e) {
        e.preventDefault();
        // if item not in cart, ignore
        const found = cart.some(cartItem => cartItem.id === bread.id);
        if (!found) {
            return
        }
        setCart((prevCart) => {
            // Case 2: if decrementing from 1, delete the item from cart
            if (getQuantity(bread.id) === 1) {
                setCart((prevCart) => {
                    if (prevCart === undefined) { 
                        return [] }
                    return prevCart.filter((cartItem) => cartItem.id !== bread.id)
                });
            }
            // Otherwise: update subtotal...
            addToSubtotal(-getPrice());
            // ... and decrement cart quantity
            return (
                prevCart.map((cartItem) => {
                    if (cartItem.id === bread.id) {
                        cartItem.quantity = cartItem.quantity - 1;
                    }
                    return cartItem
                })
            )
        })
    }

    function incrementCount(e) {
        e.preventDefault();
        // cap the maximum number of each bread
        const maxQuantity = 10;
        if (getQuantity(bread.id) === maxQuantity) { return }
        setCart((prevCart) => {
            // if item not yet in cart, add it
            const found = prevCart.some(cartItem => cartItem.id === bread.id);
            if (!found) {
                prevCart.push({
                    id: bread.id,
                    quantity: 0
                });
            }
            // update subtotal
            addToSubtotal(getPrice());
            return (
                // increment cart quantity
                prevCart.map((cartItem) => {
                    if (cartItem.id === bread.id) {
                        cartItem.quantity = cartItem.quantity + 1
                    }
                    return cartItem
                })
            )
        })
    }

    function getPrice() {
        // get price
        for(var i = 0; i < catalogue.length; i += 1) {
            if(catalogue[i]["id"] === bread.id) {
                return catalogue[i]["price"]/100
            }
        }
    }

    function getQuantity(id) {
        for(var i = 0; i < cart.length; i += 1) {
            if(cart[i]["id"] === id) {
                return cart[i]["quantity"]
            }
        }
    }

    function addToSubtotal(amount) {
        setSubtotal((prevSubtotal) => prevSubtotal + amount);
    }

    return (
        <div className="col s4">
            <div className="center">
                <h5>{bread.name}</h5>
                <img src={`http://localhost:4242/public/Images/${bread.imgName}`} alt={bread.name} width="200" height="200"/>
                <p className="light">${bread.price/100}</p>
                <button className="btn-floating waves-effect waves-light btn-small" style={{"marginRight":"10px"}} onClick={decrementCount}>-</button>
                <span>{(getQuantity(bread.id) !== undefined) ? getQuantity(bread.id) : 0}</span>
                <button className="btn-floating waves-effect waves-light btn-small" style={{"marginLeft":"10px"}} onClick={incrementCount}>+</button>
            </div>
        </div>
        
    )
}