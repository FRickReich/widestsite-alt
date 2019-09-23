'use strict';

import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = ({ children }) => (
    <>
        <main className="page">
            <div className="content">
                <Header />
            
                { children }
            </div>

            <Footer className="footer"/>
        </main>
    </>
);

export default App;
