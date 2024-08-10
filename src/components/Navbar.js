import React from 'react'

const Navbar = (props) => {

   console.log(props);



  return (
    <div>
            <h1>Navbar Component is called {props.name} and id {props.data.id}</h1>
    </div>
  )
}

export default Navbar
