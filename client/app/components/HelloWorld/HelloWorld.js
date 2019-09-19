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
            <div className="content">
                <Header className="header" />
                
                <p>Hello World</p>
            </div>
        )
    }
}

export default HelloWorld;
