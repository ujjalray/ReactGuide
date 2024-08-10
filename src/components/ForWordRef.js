//it is normaly we used for sheft raf one to onather component .
//like child componenet are input ke jodi parand class are button are click a access korte chai tahole...

import React,{forwardRef} from 'react'

const ForWordRef = (props,raf) => {



    return (
        <div>


            <input type="text" ref={raf}  placeholder='Enter Your Name' />






        </div>
    )
}

export default forwardRef(ForWordRef);































