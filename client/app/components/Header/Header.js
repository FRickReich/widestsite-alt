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

        this.state =
        {
            token: ''
        };
    }

    componentDidMount()
    {
        const obj = getFromStorage('gandhi');

        if (obj && obj.token) 
        {
            const { token } = obj;
            
            // Verify token
            fetch('/api/account/verify?token=' + token)
            .then(res => res.json())
            .then(json => 
            {
                if (json.success) 
                {   
                    this.setState({
                        token
                    });
                }
            });
        }
    }

    render()
    {
        const { token } = this.state;

        return (
            <header>
                <Link to="/">Home</Link>

                <nav>
                    <Link to="/helloworld">Hello World</Link>
                </nav>
        
                <Link to="/asdf">404 Page</Link>

                {
                    token ?
                    <p>User logged in</p>
                    :
                    <p>User not logged in</p>
                }

                <hr />
            </header>
        )
    }
}

export default Header;
