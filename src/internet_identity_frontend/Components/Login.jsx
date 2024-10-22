import React, { useState } from 'react'
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from '@dfinity/agent';
import { internet_identity_backend } from 'declarations/internet_identity_backend';


const Login = () => {
  const [loggedIn, setLoggedIn]= useState(false);
  let actor = internet_identity_backend;

  const handleLogin = async () => {
    let authClient = await AuthClient.create();//create an auth client

    //start login process

    authClient.login({
      //identityProvider: process.env.IDENTITY_PROVIDER,
      maxTimeToLive: BigInt (1) * BigInt(24) * BigInt(3_600_000_000_000), // 1 day
      onSuccess: ()=>{
        setLoggedIn(true);
      },
    });



    //get identity
    const identity = authClient.getIdentity();
    // Using the identity obtained from the auth client, we can create an agent to interact with the IC.
    const agent = new HttpAgent({ identity });
    // Using the interface description of our webapp, we create an actor that we use to call the service methods.
    actor = createActor(process.env.CANISTER_ID_INTERNET_IDENTITY_BACKEND, {
      agent,
    });

    return false;
  };

  return (
    <div>
      <button onClick={handleLogin} disabled={loggedIn}>{loggedIn? "Logged In" : "Log in"}</button>
    </div>
  )
}

export default Login
