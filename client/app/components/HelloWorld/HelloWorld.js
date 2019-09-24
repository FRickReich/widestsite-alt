'use strict';

import React, { Component } from 'react';

class HelloWorld extends Component 
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
            <div>
                <h1>Hello World</h1>

                <p>this is a hello world template page...</p>
            </div>
        )
    }
}

export default HelloWorld;
