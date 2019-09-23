'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

class Home extends Component 
{
    constructor(props) 
    {
        super(props);

        this.state =
        {
            repos: [],
            loadingRepo: true
        };
    }

    componentDidMount()
    {
        this.fetchData();
    }

    fetchData()
    {
        this.setState({ loadingRepo: true })

        fetch(`https://api.github.com/users/hiteshsahu/repos`)
        .then(response => response.json())
        .then(data => 
        {
            if (Array.isArray(data)) 
            {
                console.log(JSON.stringify(data));
                this.setState({
                    repos: data,
                    loadingRepo: false
                });
            }
            else
            {
                this.setState({
                    repos: [],
                    loadingRepo: false  
                });
            }
        });
    }

    render()
    {
        const { loadingRepo, repos } = this.state;

        if (repos)
        {
            console.log(repos);
        }

        return (
            <div>test</div>
        )
    }
}

export default Home;
