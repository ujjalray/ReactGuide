import React, { useEffect, useState } from 'react'

const Hooks = () => {


    // seState: Allows you to add state to a functional component.
    // useEffect: Lets you perform side effects (e.g., data fetching, subscriptions, life cycle mathed) in functional components.
    // useContext: Enables you to use the React context API in functional components.
    // useReducer: Manages complex state logic using a reducer function.
    // useRef: Accesses a mutable reference to a DOM element or a value that persists across renders.


   let [data,setData]=useState(1);

    // useEffect(()=>{

    //      console.warn("componet is updated ");

    // })


    useEffect(()=>{

        console.warn("componet is updated ");

   },[data])



  return (
    <div>
      
       <h1>{data}</h1>

       <button onClick={()=>setData(data+1)}>Click</button>

    </div>
  )
}

export default Hooks
