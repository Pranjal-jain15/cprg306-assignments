"use client"
import React from "react";
import { useUserAuth } from "./_utils/auth-context";


const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    await gitHubSignIn();
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p><br></br>
          <button onClick={handleLogout}>Logout</button><br></br>
          <a href="./week8/shopping-list">Click here to Access shopping list</a> <br></br>
        </div>
      ) : (
        <button onClick={handleLogin}>Login with GitHub</button>
      )}
    </div>
  );
};

export default Page;
