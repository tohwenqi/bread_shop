import React, { Component } from 'react';
import SelectionItem from './SelectionItem';
import propTypes from 'prop-types';

class Selection extends Component {
    render() {
        return (
            this.props.breads.map((bread) => (
                <SelectionItem key={bread.id} bread={bread} toggleSelect={this.props.toggleSelect}/>
            ))
        )
    }
}

Selection.propTypes = {
    breads: propTypes.array.isRequired
}

export default Selection;