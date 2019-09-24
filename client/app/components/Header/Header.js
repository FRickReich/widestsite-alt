'use strict';
import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

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
                <nav id="topMenu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <NavLink to="/helloworld" activeClassName="active">Hello World</NavLink>
                        </li>
                        <li>
                            <NavLink to="/repos" activeClassName="active">Repos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/asdf" activeClassName="active">404 Page</NavLink>
                        </li>
                    </ul>
                </nav>

                <hr />
            </header>
        )
    }
}

export default Header;
