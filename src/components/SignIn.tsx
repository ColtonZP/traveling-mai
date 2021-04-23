import React, { useContext } from 'react'
import { useAuth } from '../AuthContext'

export const SignIn = () => {
  const { user, signIn, signOut } = useAuth()

  if (user.displayName) {
    return (
      <>
        <h1>Signed in as {user.displayName}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return <button onClick={() => signIn()}>Sign in with Google</button>
}
