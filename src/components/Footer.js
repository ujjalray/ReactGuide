// import React, { Component } from 'react';

// class Footer extends Component {
//     constructor() {

//         super();
//         this.state = {
//             name: "ujjal"
//         };
//     }

//     fun=()=> {
//         this.setState({ name: "Ray" });
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <button onClick={this.fun}>Submit</button>
//             </div>
//         );
//     }
// }


import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>

        <h1>{this.props.name}</h1>
        
      </div>
    )
  }
}







