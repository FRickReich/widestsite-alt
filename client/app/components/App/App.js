'use strict';

import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
    <>
        <main className="page">
            <Header className="header"/>
            
            <section className="content">
                { children }
            </section>
        </main>

        <Footer className="footer"/>
    </>
);

export default App;
