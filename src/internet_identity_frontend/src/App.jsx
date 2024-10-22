import { useState } from 'react';
import { internet_identity_backend } from 'declarations/internet_identity_backend';
import Login from '../Components/Login';
import Greet from '../Components/Greet';

function App() {

  return (
   <>
   <Login />
   <Greet/>
   </>
  );
}

export default App;
