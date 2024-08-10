import React,{useState} from 'react'

const CondiRindaing = () => {

   let [data,setData]=useState(2);


    return (

         <div>

                {data==1? <h1>user1</h1>: data==2 ? <h1>user2</h1> : <h1>user3</h1> }          

        </div>

    )
}

export default CondiRindaing
