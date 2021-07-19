import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

// import { AuthProvider } from './AuthContext'
import { Home } from './components/home/Home'
import { PlaylistPage } from './components/pages/PlaylistPage'
import { SearchPage } from './components/pages/SearchPage'
import { VideoPage } from './components/pages/VideoPage'
import { SearchBar } from './components/SearchBar'
// import { SignIn } from './components/SignIn'

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            {/* <AuthProvider> */}
            <Router>
                <header className="container">
                    <Link to="/">
                        <h1>Traveling Mai</h1>
                        <p className="tag-line">Lets travel the world</p>
                    </Link>
                    <SearchBar />
                    {/* <SignIn /> */}
                </header>

                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/search=:id" component={SearchPage} />
                        <Route exact path="/video/:id" component={VideoPage} />
                        <Route exact path="/playlist/:id" component={PlaylistPage} />
                    </Switch>
                </main>
            </Router>
            {/* </AuthProvider> */}
        </QueryClientProvider>
    )
}

/*
    Todo: search bar
 */
