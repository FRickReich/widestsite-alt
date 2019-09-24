'use strict';
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

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
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/helloworld">Hello World</Link>
                        </li>
                        <li>
                            <Link to="/repos">Repos</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/asdf">404 Page</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
            </header>
        )
    }
}

export default Header;
