import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Head from 'next/head'

import { AuthProvider } from '../components/auth/AuthContext'
import { SignIn } from '../components/auth/SignIn'

import '../styles/index.scss'

export const client = new ApolloClient({
  uri: process.env.GRAPHQL_SERVER,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="MP-dP9mdVxusdz3LHLPYMAKOOzpULP7IVVjvKpXD9_4"
        />
      </Head>
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
    </>
  )
}

export default MyApp
