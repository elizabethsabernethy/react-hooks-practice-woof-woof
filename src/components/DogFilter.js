import React, { useState } from "react";

function DogFilter(){
    const[filter, setFilter] = useState(true)

    function handleGoodFilter(){
        setFilter((filter)=> filter = !filter)
    }
    return(
        <div>
            <button onClick={handleGoodFilter} id="good-dog-filter">Filter good dogs: {!filter ? 'On' : 'Off'}</button>
        </div>
    )
}

export default DogFilter;