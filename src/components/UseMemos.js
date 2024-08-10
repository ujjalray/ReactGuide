// its is same is pure component .. both used for 
//we can heldle unwonted call 
//use Memo for Hooks 
import React, { useMemo, useState } from 'react'

const UseMemos = () => {

  let [count, setCount] = useState(0);
  let [item, setItem] = useState(10);


  const multiCountss=useMemo( function multiplay() {
    console.warn("multiCount");
    return count * 5
   },[count]
 )


 

  return (
    <div>
      <h1>useMomo Hokes in React</h1>
      <h1>Count:{count}</h1>
      <h1>Item :{item}</h1>
      <h2>{multiCountss}</h2>

      <button onClick={() => setCount(count + 1)}> Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Items</button>
    </div>
  )
}

export default UseMemos;
