import React, { useState } from 'react'

const Login = () => {

  let [user, setUser] = useState("");
  let [password, setPassword] = useState("");
  let [status, setStatus] = useState(false);
  let [statusp, setStatusp] = useState(false);

  function fun(e) {


    if(user.length<3  || password<8){
        alert("Details is not valid ");
    }else{
        alert("All good");
    }
    e.preventDefaut();
  }


  function userHendear(e) {

    let item = e.target.value;
    if (item.length < 3) {
      setStatus(true);
    } else {
      setStatus(false);
    }

  }




  function passwordHendear(e) {

    let item = e.target.value;
    if (item.length < 8) {
      setStatusp(true);
    } else {
      setStatusp(false);
    }

  }

  return (
    <div>

      <form onSubmit={fun}>

        <input type='text' placeholder='Enter user id' onChange={userHendear} />
        {status ? <span>Username not valid</span> : null}
        <br /><br />


        <input type='password' placeholder='Enter user password' onChange={passwordHendear} />
        {statusp ? <span>password not valid</span> : null}
        <br /><br />

        <button type='submit'>Login</button>

      </form>

    </div>
  )
}

export default Login
