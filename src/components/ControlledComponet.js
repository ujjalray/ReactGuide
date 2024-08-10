//jodi componenet are input field ke  state are madhome access koete pari tahole setake controlled 
//boli 



import React, { useState } from 'react'

const ControlledComponet = () => {

   let [val,setVal]=useState("");


  return (
    <div>

          <input type="" value={val} defaultValue="000" onChange={(e)=>{setVal(e.target.value)}}/>
      
    </div>
  )
}

export default ControlledComponet







































