import React from 'react';
import SelectionItem from "./SelectionItem";
import Cart from "./Cart";

export default function Selection({catalogue, cart, setCart}) {
    return (
        <React.Fragment>
            <div className="center">
                <h3>{catalogue.length} varieties baking today!</h3>
            </div>
            <div className="row">
                { catalogue.map((bread) => {
                    return (
                        <SelectionItem key={bread.id} bread={bread} setCart={setCart}/>
                    )
                }) }
            </div>
            <div>
                <Cart/>
            </div>
        </React.Fragment>
    )
}
