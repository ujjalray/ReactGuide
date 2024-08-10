import React, { useState } from 'react'

const HideToggle = () => {

    let [status, setStatus] = useState(true);

    return (
        <div>

            {status ? <h1>Hello world</h1>: null  }
            {/* <button onClick={()=>setStatus(!status)}>Toggle</button> */}
            {/* <button onClick={() => setStatus(false)}>Hide</button> <button onClick={() => setStatus(true)}>Show</button> */}

        </div>
    )
}

export default HideToggle
