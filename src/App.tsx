import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { SignIn } from './components/SignIn'
import { AuthProvider } from './AuthContext'
import { YouTube } from './components/videos/VideosContext'

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <h1>Josh Vlogs</h1>
        <SignIn />
        <Switch>
          <Route exact path="/" component={YouTube} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}
