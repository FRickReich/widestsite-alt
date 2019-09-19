'use strict';

import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = ({ children }) => (
    <>
        <Header className="header" />

        <main className="content" >
            { children }
        </main>

        <Footer className="footer" />
    </>
);

export default App;
