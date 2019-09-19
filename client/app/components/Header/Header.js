'use strict';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import 'whatwg-fetch';

import {
    getFromStorage
} from '../../utils/storage';

class Header extends Component 
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return (
            <header>
                <Link to="/">Home</Link>

                <nav>
                    <Link to="/helloworld">Hello World</Link>
                </nav>
        
                <Link to="/asdf">404 Page</Link>

                <hr />
            </header>
        )
    }
}

export default Header;
