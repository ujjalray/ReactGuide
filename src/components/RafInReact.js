//raf normally we can used to manupilate dom elements 

import React, { createRef, Component } from 'react';

export default class RafInReact extends Component {

    constructor() {
        super();
        this.inputRef = createRef(); 
        console.log( this.inputRef )
    }

    componentDidMount() {
        this.inputRef.current.value = 100;
    }

    getValue(){

        this.inputRef.current.style.color="red";
        console.log(this.inputRef.current.value)

    }


    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <button onClick={()=>this.getValue()}>click</button>
            </div>
        );
    }
}

