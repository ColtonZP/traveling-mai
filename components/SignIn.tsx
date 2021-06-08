import React from 'react'
import { useAuth } from '../AuthContext'

export const SignIn = () => {
  const { user, signIn, signOut } = useAuth()

  if (user.displayName) {
    return (
      <>
        <span className="user">Signed in as {user.displayName}</span>
        <button className="sign-out" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }

  return (
    <button className="sign-in" onClick={() => signIn()}>
      Sign in with Google
    </button>
  )
}
