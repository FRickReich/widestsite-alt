'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

class Dashboard extends Component 
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Dashboard</h1>

                <p>this is the dashboard...</p>
            </div>
        )
    }
}

export default Dashboard;
