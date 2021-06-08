import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { AuthProvider } from '../components/auth/AuthContext'
import { SignIn } from '../components/auth/SignIn'

import '../styles/index.scss'

export const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <AuthProvider>
        <header className="container">
          <a href="/">
            <h1>Traveling Mai</h1>
          </a>
          <SignIn />
        </header>
        <Component {...pageProps} />
      </AuthProvider>
    </ApolloProvider>
  )
}

export default MyApp
