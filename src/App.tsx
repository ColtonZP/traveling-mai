import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AuthProvider } from './AuthContext'
import { Home } from './components/home/Home'
import { PlaylistPage } from './components/pages/PlaylistPage'
import VideoPage from './components/pages/VideoPage'
import { SignIn } from './components/SignIn'

export const client = new ApolloClient({
    // uri: 'http://localhost:4000',
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
                            <p className="tag-line">Lets travel the world</p>
                        </Link>
                        {/* <SignIn /> */}
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

/*
    Todo: search bar
 */
