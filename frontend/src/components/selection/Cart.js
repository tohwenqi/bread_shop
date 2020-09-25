import React from 'react'

export default function Cart({cart, catalogue}) {
    if (cart.length === 0) {
        return null
    }
    console.log("cart", cart, "catalogue", catalogue)
    return (
        <div className="column">
            { [...cart].forEach(cartItem => {
                return(
                    <div className="row">
                        cartItem.name
                    </div>
                )
            }) }
        </div>
        
    )
}
