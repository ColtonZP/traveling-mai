import { AuthProvider } from '../components/AuthContext'
import { SignIn } from '../components/SignIn'
import { Home } from '../components/videos/Home'
import { PlaylistPage } from '../components/videos/PlaylistPage'
import { VideoPage } from '../components/videos/VideoPage'

// search https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${}&q=${}&type=video&key=[YOUR_API_KEY]

export const App = () => {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <header className="container">
            <Link to="/">
              <h1>Josh Vlogs</h1>
            </Link>
            <SignIn />
          </header>

          <main className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/:id" component={VideoPage} />
              <Route exact path="/playlist/:id" component={PlaylistPage} />
            </Switch>
          </main>
        </Router>
      </QueryClientProvider>
    </AuthProvider>
  )
}
