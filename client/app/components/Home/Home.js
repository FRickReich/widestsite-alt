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
            counters: [  ]
        };
        
        this.newCounter = this.newCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.deleteCounter = this.deleteCounter.bind(this);
    
        this._modifyCounter = this._modifyCounter.bind(this);

        this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
        this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
        this.onSignIn = this.onSignIn.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        
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

        fetch('/api/counters')
        .then(res => res.json())
        .then(json => 
        {
            this.setState({
                counters: json
            });
        });
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

    newCounter()
    {
        fetch('/api/counters', { method: 'POST' })
        .then(res => res.json())
        .then(json => 
        {
            let data = this.state.counters;
            data.push(json);

            this.setState({
                counters: data
            });
        });
    }

    incrementCounter(index)
    {
        const id = this.state.counters[index]._id;

        fetch(`/api/counters/${id}/increment`, { method: 'PUT' })
        .then(res => res.json())
        .then(json => 
        {
            this._modifyCounter(index, json);
        });
    }

    decrementCounter(index)
    {
        const id = this.state.counters[index]._id;

        fetch(`/api/counters/${id}/decrement`, { method: 'PUT' })
        .then(res => res.json())
        .then(json =>
        {
            this._modifyCounter(index, json);
        });
    }

    deleteCounter(index) 
    {
        const id = this.state.counters[index]._id;

        fetch(`/api/counters/${id}`, { method: 'DELETE' })
        .then(_ => 
        {
            this._modifyCounter(index, null);
        });
    }

    _modifyCounter(index, data) 
    {
        let prevData = this.state.counters;

        if (data) 
        {
            prevData[index] = data;
        }
        else
        {
            prevData.splice(index, 1);
        }

        this.setState({
            counters: prevData
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

                    <br />

                    <p>Counters:</p>
                    
                    <ul>
                    {
                        this.state.counters.map((counter, i) => (
                            <li key={i}>
                                <span>{counter.count} </span>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            );
        }
        return (
            <div className="content">
                <Header className="header" />

                <p>Account</p>

                <p>email: { userData.email }</p>
                <p>created: { userData.signUpDate }</p>

                <button onClick={ this.logout }>Logout</button>
                <br />

                <p>Counters:</p>

                <ul>
                {
                    this.state.counters.map((counter, i) => (
                        <li key={i}>
                            <span>{counter.count} </span>
                            <button onClick={() => this.incrementCounter(i)}>+</button>
                            <button onClick={() => this.decrementCounter(i)}>-</button>
                            <button onClick={() => this.deleteCounter(i)}>x</button>
                        </li>
                    ))
                }
                </ul>


                <button onClick={this.newCounter}>Add counter</button>
            </div>
        );
    }
}

export default Home;
