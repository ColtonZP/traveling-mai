import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { SignIn } from './components/SignIn'
import { AuthProvider } from './AuthContext'
import { YouTube } from './components/videos/VideosContext'
import { VideoPage } from './components/videos/VideoPage'

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Link to="/">Josh Vlogs</Link>
        <SignIn />
        <Switch>
          <Route exact path="/" component={YouTube} />
          <Route exact path="/:id" component={VideoPage} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}
