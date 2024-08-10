import '../App.css';
import React, { useRef, useState } from 'react'


//jokon are componet ke are akta componet ke as argument pass kori and return a as a argument kori


// Your Registration ID is 1721667094.

// Your Password is 123657.

// Your OTP is 6952.


function HighLavelComponent() {
    return (
        <div className="App">
            <h1>HOC </h1>
          
            <ColorChange col={Counter}/>

        </div>
    );
}


function ColorChange(props){

   return <h1  style={{backgroundColor:'red',width:100}} > <props.col /></h1>


}


function Counter() {
    const [count, setCount] = useState(0)
    return <div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
}

export default HighLavelComponent;
