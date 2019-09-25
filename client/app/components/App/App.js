'use strict';

import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = ({ children }) => (
    <>
        <main className="page">
            <Header />
            
            <div className="content">
                { children }
            </div>

            <Footer className="footer"/>
        </main>
    </>
);

export default App;
