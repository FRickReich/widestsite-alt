'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

class Container extends Component
{
    constructor(props) 
    {
        super(props);
    }

    componentDidMount()
    {

    }

    /**
     * @todo Create Container & Unit logics
     * @body Create logics for the container and the units to be created, a how they are handled.
     */

    render()
    {
        return (
            <div>
                <h1>Container</h1>

                <p>This is the unit-container system</p>

                <div className="scroll-box">
                    <div id="unit_1" className="unit"><h2>Unit</h2></div>
                    <div id="unit_2" className="unit"><h2>Unit</h2></div>
                    <div id="unit_3" className="unit"><h2>Unit</h2></div>
                    <div id="unit_4" className="unit"><h2>Unit</h2></div>
                    <div id="unit_5" className="unit"><h2>Unit</h2></div>
                    <div id="unit_6" className="unit"><h2>Unit</h2></div>
                    <div id="unit_7" className="unit"><h2>Unit</h2></div>
                    <div id="unit_8" className="unit"><h2>Unit</h2></div>
                    <div id="unit_9" className="unit"><h2>Unit</h2></div>
                    <div id="unit_10" className="unit"><h2>Unit</h2></div>
                    <div id="unit_11" className="unit"><h2>Unit</h2></div>
                    <div id="unit_12" className="unit"><h2>Unit</h2></div>
                    <div id="unit_13" className="unit"><h2>Unit</h2></div>
                    <div id="unit_14" className="unit"><h2>Unit</h2></div>
                    <div id="unit_15" className="unit"><h2>Unit</h2></div>
                    <div id="unit_16" className="unit"><h2>Unit</h2></div>
                    <div id="unit_17" className="unit"><h2>Unit</h2></div>
                    <div id="unit_18" className="unit"><h2>Unit</h2></div>
                    <div id="unit_19" className="unit"><h2>Unit</h2></div>
                    <div id="unit_20" className="unit"><h2>Unit</h2></div>
                </div>

                <a href="#unit_17">test</a>
            </div>
        )
    }
}

export default Container;
