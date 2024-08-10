import React from 'react'

const ArrayList = () => {

    let data = [
        { Name: "ujjal", id: 1, city: "kolkata" },
        { Name: "Pinki", id: 2, city: "Delhi" },
        { Name: "Utpal", id: 3, city: "Bengalore" },
        { Name: "Sujit", id: 4, city: "kolkata" }
    ];


    //potak ta list ke identity korar jonno akta key doekar 
    //return a for loop kaj kore na 
    return (
        <div>


            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>City</th>

                    </tr>


                    {
                        data.map((data,i) => {

                          return   <tr key={i}>
                                <th>{data.Name}</th>
                                <th>{data.id}</th>
                                <th>{data.city}</th>

                            </tr>
                        })
                    }




                </tbody>
            </table>


        </div>
    )
}

export default ArrayList
