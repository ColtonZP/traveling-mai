import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { SignIn } from './components/SignIn'
import { AuthProvider } from './AuthContext'
import { Home } from './components/videos/Home'
import { VideoPage } from './components/videos/VideoPage'

const queryClient = new QueryClient()

export const App = () => {
  window.addEventListener('scroll', () => console.log('object'))
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Link to="/">
            <h1>Josh Vlogs</h1>
          </Link>
          <SignIn />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={VideoPage} />
          </Switch>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  )
}
