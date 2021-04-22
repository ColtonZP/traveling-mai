import React from 'react'
import { SignIn } from './components/SignIn'
import { AuthProvider } from './Context'

export const App = () => {
  return (
    <AuthProvider>
      <h1>Josh Vlogs</h1>
      <SignIn />
    </AuthProvider>
  )
}
