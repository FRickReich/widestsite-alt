'use strict';

import React, { Component } from 'react';

class Footer extends Component 
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
            <footer>
                <hr />
                <p>Gandhi © 2019 by <a href="mailto:frickreich@gmail.com">F. Rick Reich</a></p>
            </footer>
        )
    }
}

export default Footer;
