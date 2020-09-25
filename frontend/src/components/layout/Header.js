import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h2>Bouncy Buns</h2>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '5px'
}

export default Header;