import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

const queryClient = new QueryClient()

export const YouTube = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Videos />
    </QueryClientProvider>
  )
}

const Videos = () => {
  const { isLoading, error, data }: any = useQuery('repoData', () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=1&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (isLoading) return <h1>YouTube</h1>

  if (error) {
    alert('There was an error loading the videos from YouTube ' + error.message)
    return (
      <div>
        <h1>There was an error loading the videos from YouTube.</h1>
        <h1>{error.message}</h1>
        <h1>Try again later.</h1>
      </div>
    )
  }

  console.log(error, data)

  return (
    <div>
      <h1>YouTube</h1>
    </div>
  )
}
