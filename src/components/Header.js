import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Deep Purple</h1>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        </div>
    </header>
);

export default Header;