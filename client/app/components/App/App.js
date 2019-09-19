'use strict';

import React, { Component } from 'react';

import Footer from '../Footer/Footer';

const App = ({ children }) => (
    <>
        <main className="page">
                { children }
        </main>

        <Footer className="footer"/>
    </>
);

export default App;
