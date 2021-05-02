import React from 'react'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import { Playlist } from './Playlist'
import { VideoFrame } from './VideoFrame'
import { ThumbnailLink } from './ThumbnailLink'

const queryClient = new QueryClient()

export const YouTube = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Videos />
    </QueryClientProvider>
  )
}

const Videos = () => {
  const latestVideos: any = useQuery('jumbotronVideo', () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_PLAYLIST_ID}&maxResults=6&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  const playlists: any = useQuery('playlists', () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (latestVideos.isLoading || playlists.isLoading) return <h1>Loading...</h1>

  if (latestVideos.error || playlists.error) {
    alert(
      'There was an error loading the videos from YouTube ' +
        latestVideos.error.message,
    )
    return (
      <div>
        <p>There was an error loading the videos from YouTube.</p>
        <p>{latestVideos.error?.message}</p>
        <p>{playlists.error?.message}</p>
        <p>Try again later....</p>
      </div>
    )
  }

  // console.log(latestVideos.data)

  return (
    <div>
      <h1>Latest Video</h1>

      {latestVideos.data.items.map((video: any, index: number) =>
        index === 0 ? (
          <>
            <VideoFrame
              key={video.id}
              className={'jumbo'}
              videoId={latestVideos.data.items[0].snippet.resourceId.videoId}
            />
            <p>{latestVideos.data.items[0].snippet.description}</p>
          </>
        ) : (
          <ThumbnailLink key={video.id} video={video} />
        ),
      )}

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
