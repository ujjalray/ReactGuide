import React, { useState } from 'react';

const Title = () => {
  const [name, setName] = useState(null);
  const [identify, setIdentify] = useState(false);

  function handleInputChange(e) {
    console.log(e);
    setName(e.target.value);
    setIdentify(false);
  }


  return (
    <div>
      {identify ?  <h1>{name}</h1> : null }

      <input type="text" placeholder="Enter Your Data" onChange={handleInputChange} />
      <button onClick={()=> setIdentify(true)}>Submit</button>
    </div>
  );
};

export default Title;
