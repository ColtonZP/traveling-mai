import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import { AuthProvider } from './AuthContext'
import { Home } from './components/Home'
import { SignIn } from './components/SignIn'

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
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
                            {/* <Route exact path="/:id" component={VideoPage} />
                            <Route exact path="/playlist/:id" component={PlaylistPage} /> */}
                        </Switch>
                    </main>
                </Router>
            </AuthProvider>
        </ApolloProvider>
    )
}

/*
    Todo Videos page
    Todo Plylist page
    Todo remove 'any' types
*/
