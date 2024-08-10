//jodi data same thake tahole setake re render kore na but diffrent thake tahoke rerender kore
//it is only used in Class component
import React, { Component, PureComponent } from 'react';

export default class PureFunction extends PureComponent {

    constructor() {
        super();
        this.state = {
            count: 1
        }
    }

    render() {

        console.log("Component is Rendering...");

        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count })}>Click Here</button>
            </div>
        )
    }
}
