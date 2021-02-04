import React from 'react'

function Details(){

    const dts = {

        name:'Kush',
        email:'k@google.com',
        age:22
    }


    return (
        <div>
            <p>Name is: {dts.name}</p> 
            <p>Email is: {dts.email}</p> 
            <p>Age is: {dts.age}</p>
        </div>

    );

}
export default Details;