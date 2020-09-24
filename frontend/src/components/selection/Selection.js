import React, { useState } from 'react';

export default function Selection(data) {
    return (
        <div className="row">
            { data.data.map((bread) => {
                return (
                    <div className="col s4">
                        {bread.name} ${bread.price/100}<br/>
                        <img src={`http://localhost:4242/public/Images/${bread.imgName}`} width="200" height="200"/>
                    </div>
                )
            }) }
        </div>
    )
}
