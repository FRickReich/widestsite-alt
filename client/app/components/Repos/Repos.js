'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

class Repos extends Component 
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
        this.setState({
            loadingRepo: true
        })

        fetch(`https://api.github.com/users/frickreich/repos`)
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
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>target</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        repos.map((repo, i) => (
                            <tr key={ i }>
                                <td>{ repo.id }</td>
                                <td>{ repo.name }</td>
                                <td><a href={ `http://github.com/${ repo.full_name }` } >{ repo.full_name }</a></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            )
        }
    }
}

export default Repos;
