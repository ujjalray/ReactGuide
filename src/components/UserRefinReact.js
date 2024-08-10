import React,{useEffect, useRef} from 'react'

//its is same as Ref its normally used for DOM Manupilation 


const UserRefinReact = () => {

   let inputRef=useRef();

   useEffect(()=>{

        inputRef.current.value=100;
   
   })



  return (
    <div>

           <input type="text" ref={inputRef}  placeholder='Enter Your Name'  />
      
    </div>
  )
}


export default UserRefinReact;
