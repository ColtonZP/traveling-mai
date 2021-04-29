import React from 'react'
import { SignIn } from './components/SignIn'
import { AuthProvider } from './AuthContext'
import { YouTube } from './components/videos/VideosContext'

export const App = () => {
  return (
    <AuthProvider>
      <h1>Josh Vlogs</h1>
      <SignIn />
      <YouTube />
    </AuthProvider>
  )
}
