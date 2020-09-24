import React, { Component } from 'react';
import propTypes from 'prop-types';

export class SelectionItem extends Component {
    render() {
        const {title, id, price} = this.props.bread
        return (
            <div style={breadStyle}>
                <p>
                    <label>
                        <input type="checkbox" onChange={this.props.toggleSelect.bind(this, id)} />
                        {" "}
                        <span>{title}</span> <br />
                        {`$${price}`}
                    </label>
                </p>
            </div>
        )
    }
}

SelectionItem.propTypes = {
    bread: propTypes.object.isRequired
}

const breadStyle = {
    background: '#f4f4f4',
    padding: '10px',
}

export default SelectionItem;