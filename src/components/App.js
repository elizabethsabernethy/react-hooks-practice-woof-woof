import React, { useEffect, useState } from "react";
import Dog from "./Dog";
import DogFilter from "./DogFilter";

function App() {

const[dogs, setDogs] = useState([])
const[name, setName] = useState('')

useEffect(()=>{
fetch('http://localhost:3001/pups')
.then((resp)=>resp.json())
.then((dogs)=>setDogs(dogs))
},[])

function showDog(event){
setName(event.target.textContent);
}

function onGoodOrBadClick(dog){
   fetch(`http://localhost:3001/pups/${dog.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      isGoodDog : !dog.isGoodDog,
    }),
  })
    .then((resp) => resp.json())
    .then((updatedDog) => onUpdateDogs(updatedDog));
}

function onUpdateDogs(updatedDog){
  const updatedDogs = dogs.map((dog) => {
    if (dog.id === updatedDog.id) {
      return updatedDog;
    } else {
      return dog;
    }
  });
  setDogs(updatedDogs);
}

  return (
    <div className="App">
      <div id="filter-div">
        <DogFilter />
      </div>
      <div id="dog-bar">
        {dogs.map((dog)=>{
          return <span key={dog.id} onClick={showDog}>{dog.name}</span>
        })}
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          {dogs.map((dog)=>{
            return dog.name === name ? <Dog key={dog.id} dog={dog} onGoodOrBadClick={onGoodOrBadClick}/> : null
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
