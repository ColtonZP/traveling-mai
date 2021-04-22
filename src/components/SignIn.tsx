import React, { useContext } from 'react'
import { useAuth } from '../Context'

export const SignIn = () => {
  const { signIn } = useAuth()
  return <button onClick={() => signIn()}>Sign in with Google</button>
}
