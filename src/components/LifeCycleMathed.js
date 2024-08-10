import React, { Component } from 'react'

export default class LifeCycleMathed extends Component {
    
    
    constructor(){
          super();
          console.log("Construcot is called ");

          this.state={
                 name:"ujjal"
          }
     }


    componentDidMount(){
        console.log("component is created");
    }
    
    componentDidUpdate(){
       console.log("component is upated");
    }

    componentWillUnmount(){
       console.log("component is deleted");
    }


  render() {
    return (
      <div>
        
            <h1>{this.state.name}</h1>
            <button onClick={()=>this.setState({name:"Ray"})}>Click Here</button>



      </div>
    )
  }
}
