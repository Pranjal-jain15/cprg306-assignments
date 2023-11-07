"use client"
import { useUserAuth } from "./_utils/auth-context";
 export default function Page(){
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleSignIn() {
    gitHubSignIn();
  }
  function handleSignOut(){
    firebaseSignOut();
  }
  return (
   


  )
 }

