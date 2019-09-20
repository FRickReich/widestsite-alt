'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

import Header from '../Header/Header';

import {
    setInStorage,
    getFromStorage,
} from '../../utils/storage';

class Home extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state =
        {
            isLoading: true,
            token: '',
            signUpError: '',
            signInError: '',
            signUpEmail: '',
            signUpPassword: '',
            userData: [  ],
        };

        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
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

                    this.getUserInfo();
                    
                    this.setState({
                        token,
                        isLoading: false
                    });
                }
                else
                {
                    this.setState({
                        isLoading: false,
                        userData: [  ]
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

    onTextboxChangeSignUpEmail(event) 
    {
        this.setState({
            signUpEmail: event.target.value,
        });
    }

    onTextboxChangeSignUpPassword(event) 
    {
        this.setState({
            signUpPassword: event.target.value,
        });
    }

    getUserInfo()
    {
        const obj = getFromStorage('gandhi');

        if (obj && obj.token) 
        {
            const { token } = obj;
            
            // Verify token
            fetch('/api/account/?id=' + token)
            .then(res => res.json())
            .then(json => 
            {
                console.log(json);

                if (json.success) 
                {
                    this.setState({
                        isLoading: false,
                        userData: json.data
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

    onSignIn() 
    {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
        } = this.state;

        this.setState({
            isLoading: true,
        });

        fetch('/api/account/signin',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
            }),
        }).then(res => res.json())
        .then(json => 
        {
            console.log('json', json);
        
            if (json.success)
            {
                setInStorage('gandhi', { token: json.token });
                
                this.getUserInfo();

                this.setState({
                    signInError: json.message,
                    isLoading: false,
                    signUpPassword: '',
                    signUpEmail: '',
                    token: json.token,
                });
            }
            else
            {
                this.setState({
                    signInError: json.message,
                    isLoading: false,
                });
            }
        });
    }

    onSignUp()
    {
        // Grab state
        const {
            signUpEmail,
            signUpPassword,
        } = this.state;
    
        this.setState({
            isLoading: true,
        });
    
        // Post request to backend
        fetch('/api/account/signup',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: signUpEmail,
                password: signUpPassword,
            }),
        }).then(res => res.json())
        .then(json =>
        {
            console.log('json', json);
                
            if (json.success)
            {
                this.setState({
                    signUpError: json.message,
                    isLoading: false,
                    signUpEmail: '',
                    signUpPassword: '',
                });
            }
            else    
            {
                this.setState({
                    signUpError: json.message,
                    isLoading: false,
                });
            }
        });
    }

    render()
    {
        const {
            isLoading,
            token,
            signInError,
            signUpEmail,
            signUpPassword,
            signUpError,
            userData
        } = this.state;

        if (isLoading)
        {
            return (<div><p>Loading...</p></div>);
        }

        if (!token)
        {
            return (
                <div className="content">
                    <Header className="header" />
                    
                    {
                        (signInError) ?
                        (
                            <p>{ signInError }</p>
                        )
                        :
                        (null)
                    }
                    {
                        (signUpError) ?
                        (
                            <p>{ signUpError }</p>
                        )
                        :
                        (null)
                    }
                    
                    <p>Sign Up/Sign In</p>

                    <input
                        type="email"
                        placeholder="Email"
                        value={ signUpEmail }
                        onChange={ this.onTextboxChangeSignUpEmail }
                    />
                        
                    <br />
                        
                    <input
                        type="password"
                        placeholder="Password"
                        value={ signUpPassword }
                        onChange={ this.onTextboxChangeSignUpPassword }
                    />
                        
                    <br />
                        
                    <button onClick={ this.onSignUp }>Sign Up</button>
                    <button onClick={ this.onSignIn }>Sign In</button>
                    
                </div>
            );
        }
        return (
            <div className="content">
                <Header className="header" />
                
                <p>Account</p>

                <p>email: { userData.email }</p>
                <p>created: { userData.signUpDate }</p>

                <br />
            </div>
        );
    }
}

export default Home;
