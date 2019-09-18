'use strict';

import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <Link to="/">Home</Link>

        <nav>
            <Link to="/helloworld">Hello World</Link>
        </nav>
        
        <Link to="/asdf">404 Page</Link>

        <hr />
    </header>
);

export default Header;
