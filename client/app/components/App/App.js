'use strict';

import React, { Component } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App = ({ children }) => (
    <>
        <div className="content">
            <Header />
            
            <section>
                { children }
            </section>
        </div>
        
        <Footer id="footer" />
    </>
);

export default App;
