import React, { createContext, useContext, useState, useEffect } from 'react'
// import firebase from 'firebase/app'

import { auth, googleAuth } from '../lib/firebase'
import { User } from '../types/user'

const defaultUser: User = {
  displayName: null,
  email: null,
  photoURL: null,
}

const AuthContext = createContext({
  user: defaultUser,
  signIn: () => {},
  signOut: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      } else {
        setUser(defaultUser)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  function signIn() {
    return auth
      .signInWithPopup(googleAuth)
      .then(res => {
        // const credential = res.credential as firebase.auth.OAuthCredential
        // const token = credential!.accessToken
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        // const email = error.email
        // const credential = error.credential
        alert(`Error signing in error code ${errorCode}. ${errorMessage}`)
      })
  }

  function signOut() {
    return auth.signOut()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  )
}
