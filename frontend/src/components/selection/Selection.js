import React from 'react';
import SelectionItem from "./SelectionItem";
import Cart from "./Cart";

export default function Selection({catalogue, cart, setCart, subtotal, setSubtotal}) {
    return (
        <React.Fragment>
            <div className="center">
                <h3>{catalogue.length} varieties baking today!</h3>
            </div>
            <div className="row">
                { catalogue.map((bread) => {
                    return (
                        <SelectionItem key={bread.id} bread={bread} cart={cart} setCart={setCart} catalogue={catalogue} setSubtotal={setSubtotal}/>
                    )
                }) }
            </div>
            <div>
                <Cart cart={cart} catalogue={catalogue} subtotal={subtotal}/>
            </div>
        </React.Fragment>
    )
}
