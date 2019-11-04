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
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/counter" activeClassName="active">Counter</NavLink>
                        </li>
                        <li>
                            <NavLink to="/repos" activeClassName="active">Repos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/container" activeClassName="active">Container</NavLink>
                        </li>
                        <li>
                            <NavLink to="/asdf" activeClassName="active">404 Page</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
