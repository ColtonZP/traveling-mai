import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AuthProvider } from './AuthContext'
import { Home } from './components/Home'
import { PlaylistPage } from './components/pages/PlaylistPage'
import VideoPage from './components/pages/VideoPage'
import { SignIn } from './components/SignIn'

export const client = new ApolloClient({
    uri: 'https://traveling-mai.wm.r.appspot.com/',
    cache: new InMemoryCache(),
})

export function App() {
    return (
        <ApolloProvider client={client}>
            <AuthProvider>
                <Router>
                    <header className="container">
                        <Link to="/">
                            <h1>Traveling Mai</h1>
                        </Link>
                        <SignIn />
                    </header>

                    <main className="container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/video/:id" component={VideoPage} />
                            <Route exact path="/playlist/:id" component={PlaylistPage} />
                        </Switch>
                    </main>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    )
}
