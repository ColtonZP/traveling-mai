import React, { createContext, useContext, useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { app, auth, googleAuth } from './firebase'
import { UserInfo } from '@firebase/auth-types'

const defaultUser: UserInfo = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  providerId: '',
  uid: '',
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
  const [user, setUser] = useState<any>(defaultUser)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setUser(user)
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
        const credential = res.credential as firebase.auth.OAuthCredential
        const token = credential!.accessToken
        setUser(res.user)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        const email = error.email
        const credential = error.credential
        alert(`Error signing in error code ${errorCode}. ${errorMessage}`)
      })
  }

  function signOut() {
    return auth.signOut()
  }

  const value = {
    user,
    signIn,
    signOut,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
