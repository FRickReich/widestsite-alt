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
            token: '',
            isLoading: true
        };
        
        this.logout = this.logout.bind(this);
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

    logout() 
    {
        this.setState({
            isLoading: true,
        });

        const obj = getFromStorage('gandhi');

        if (obj && obj.token) 
        {
            const { token } = obj;
          
            // Verify token
            fetch('/api/account/logout?token=' + token)
            .then(res => res.json())
            .then(json => 
            {
                if (json.success) 
                {
                    localStorage.removeItem('gandhi');

                    this.setState({
                        token: '',
                        isLoading: false
                    });
                }
                else
                {
                    this.setState({
                        isLoading: false,
                    });
                }
            });
        }
        else
        {
            this.setState({
                isLoading: false,
            });
        }
    }

    render()
    {
        const { token, isLoading } = this.state;

        if (isLoading)
        {
            return (<div><p>Loading...</p></div>);
        }

        return (
            <header>
                <Link to="/">Home</Link>

                <nav>
                    <Link to="/helloworld">Hello World</Link>
                </nav>
        
                <Link to="/asdf">404 Page</Link>

                {
                    token ?
                    <button onClick={ this.logout }>Logout</button>
                    :
                    <p>User not logged in</p>
                }

                <hr />
            </header>
        )
    }
}

export default Header;
