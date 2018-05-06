import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <header>
                <NavLink exact to="/" activeClassName='active'>Home</NavLink>
                <NavLink exact to="/pizza" activeClassName='active'>Pizza</NavLink>
                <NavLink exact to="/drinks" activeClassName='active'>Drinks</NavLink>
                <NavLink exact to="/checkout" activeClassName='active'>Checkout</NavLink>
            </header>
        );
    }
}

export default Header;
