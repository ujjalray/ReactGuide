import React, { useState } from 'react';

const Header = () => {

    // let data="Ujjal"

    // function fun(){  
    //      data="Ray";
    //      console.log(data);
    //  }


    const [Name, setName] = useState("Ujjal");

    function fun() {
        setName("Ray")
    }


    return (

        <div>
            
            <h1> {Name} </h1>
            <button onClick={fun}>submit</button>

        </div>
    )
}
export default Header;