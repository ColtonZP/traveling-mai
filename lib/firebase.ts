import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SEND_ID,
  appId: process.env.APP_ID,
}

export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app()

export const auth = firebase.auth()
export const googleAuth = new firebase.auth.GoogleAuthProvider()
