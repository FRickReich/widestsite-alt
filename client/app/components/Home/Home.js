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

        if (loadingRepo)
        {
            return <p>Loading...</p>
        }
        else
        {
            return (
                <ul>
                    {
                        repos.map((repo, i) => (
                            <li key={ i }>
                                <span>id: { repo.id } </span>
                                <br />
                                <span>name: { repo.name }</span>
                                <br />
                                <span>target: { repo.full_name }</span>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    }
}

export default Home;
