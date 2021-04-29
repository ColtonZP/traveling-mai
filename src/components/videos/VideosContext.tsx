import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Playlist } from './Playlist'
import { VideoFrame } from './VideoFrame'

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
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_PLAYLIST_ID}&maxResults=1&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  const playlists: any = useQuery('playlists', () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (jumboVideo.isLoading || playlists.isLoading) return <h1>Loading...</h1>

  if (jumboVideo.error || playlists.error) {
    alert(
      'There was an error loading the videos from YouTube ' +
        jumboVideo.error.message,
    )
    return (
      <div>
        <p>There was an error loading the videos from YouTube.</p>
        <p>{jumboVideo.error?.message}</p>
        <p>{playlists.error?.message}</p>
        <p>Try again later....</p>
      </div>
    )
  }

  console.log(playlists.data.items[0])

  return (
    <div>
      <h1>Latest Video</h1>
      <VideoFrame
        className={'jumbo'}
        videoId={jumboVideo.data.items[0].snippet.resourceId.videoId}
      />

      <p>{jumboVideo.data.items[0].snippet.description}</p>

      {playlists.data.items.map((playlist: any) => (
        <Playlist
          key={playlist.id}
          title={playlist.snippet.title}
          playListId={playlist.id}
        />
      ))}
    </div>
  )
}