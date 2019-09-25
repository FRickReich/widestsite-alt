'use strict';

import React, { Component } from 'react';

class Counter extends Component 
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            token: '',
            counters: [  ],
        }

        this.newCounter = this.newCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.deleteCounter = this.deleteCounter.bind(this);
    
        this._modifyCounter = this._modifyCounter.bind(this);
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
                        token
                    });
                }
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
        const { counters } = this.state;

        return (
            <div>
                <h1>Counter</h1>

                <p>this is a database interaction template page...</p>

                <ul>
                {
                    counters.map((counter, i) => (
                        <li key={i}>
                            <span>{ counter.count } </span>
                            {
                                token &&
                                <span>
                                    <button onClick={() => this.incrementCounter(i)}>+</button>
                                    <button onClick={() => this.decrementCounter(i)}>-</button>
                                    <button onClick={ () => this.deleteCounter(i) }>x</button>
                                </span>
                            }
                        </li>
                    ))
                }
                </ul>

                {
                    token &&
                    <button onClick={ this.newCounter }>Add counter</button>
                }
            </div>
        )
    }
}

export default Counter;
