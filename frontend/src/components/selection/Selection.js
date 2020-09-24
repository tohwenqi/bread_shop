import React from 'react';
import SelectionItem from "./SelectionItem";

export default function Selection(data) {
    return (
        <div className="row">
            { data.data.map((bread) => {
                return (
                    <SelectionItem key={bread.id} bread={bread} />
                )
            }) }
        </div>
    )
}
