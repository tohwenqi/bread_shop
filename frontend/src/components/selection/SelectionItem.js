import React, { useState } from 'react'

export default function SelectionItem(data) {
    const [count, setCount] = useState(0);

    function decrementCount() {
        setCount((prevCount) => {
            return (prevCount === 0) ? 0 : (prevCount - 1)
        })
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    const bread = data.bread;
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
