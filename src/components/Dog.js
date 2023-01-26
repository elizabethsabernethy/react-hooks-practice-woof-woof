import React from "react";

function Dog({dog, onGoodOrBadClick}){

    function handleGoodOrBad(){
        onGoodOrBadClick(dog)
    }

    return(
        <div>
            <h2>{dog.name}</h2>
            <img src={dog.image} alt={dog.name}></img>
            <p></p>
            <button onClick={handleGoodOrBad}>{dog.isGoodDog ? 'Good Dog' : 'Bad Dog'}</button>
        </div>
    )
}

export default Dog;