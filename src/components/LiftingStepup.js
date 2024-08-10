import React from 'react'

const LiftingStepup = (props) => {

   console.log(props)

   const data="ujjal Ray";

  return (
    <div>
      


        <button onClick={()=>props.fun(data)}>Click</button>
    </div>
  )
}

export default LiftingStepup
