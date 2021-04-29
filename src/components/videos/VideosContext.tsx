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
  const jumboVideo: any = useQuery('jumbotronVideo', () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=1&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (jumboVideo.isLoading) return <h1>Loading...</h1>

  if (jumboVideo.error) {
    alert(
      'There was an error loading the videos from YouTube ' +
        jumboVideo.error.message,
    )
    return (
      <div>
        <p>There was an error loading the videos from YouTube.</p>
        <p>{jumboVideo.error.message}</p>
        <p>Try again later....</p>
      </div>
    )
  }

  console.log(jumboVideo)

  return (
    <div>
      <h1>YouTube</h1>
    </div>
  )
}
