'use strict';

import React from 'react';
import { render } from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import App from './components/App/App';

import NotFound from './components/App/NotFound';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Repos from './components/Repos/Repos';
import Dashboard from './components/Dashboard/Dashboard';
import Container from './components/Container/Container';

import './styles/styles.scss';

render((
    <Router>
        <App>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/counter" component={ Counter } />
                <Route path="/repos" component={ Repos } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/container" component={ Container } />
                <Route component={NotFound}/>
            </Switch>
        </App>
    </Router>
), document.getElementById('app'));
