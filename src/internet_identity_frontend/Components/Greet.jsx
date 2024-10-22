import React, { useState } from 'react'
import { internet_identity_backend } from 'declarations/internet_identity_backend';

const Greet = () => {
    const [greeting, setGreeting]= useState("");
    const actor = internet_identity_backend;
    const handleGreet = ()=>{
        actor.greet().then((greeting)=>{
            setGreeting(greeting);
        });
    };

  return (
    <div>
      <button onClick={handleGreet}>Greet</button>
    <p>{greeting}</p>
    </div>
  )
}

export default Greet
