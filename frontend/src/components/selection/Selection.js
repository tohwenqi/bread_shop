import React from 'react';
import SelectionItem from "./SelectionItem";

export default function Selection(data) {
    return (
        <React.Fragment>
            <div className="center">
                <h3>{data.data.length} varieties baking today!</h3>
            </div>
            <div className="row">
                { data.data.map((bread) => {
                    return (
                        <SelectionItem key={bread.id} bread={bread} />
                    )
                }) }
            </div>
        </React.Fragment>
    )
}
