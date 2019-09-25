'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component
{
    constructor(props) 
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h1>Home</h1>

                <p>this is the homepage...</p>
            </div>
        )
    }
}

export default Home;
