import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'

import { Playlist } from './Playlist'
import { VideoFrame } from './VideoFrame'
import { ThumbnailLink } from './ThumbnailLink'

export const Home = () => {
  const [showDescription, updateDesc] = useState<boolean>(false)

  const latestVideos: any = useQuery('latestVideos', () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${process.env.REACT_APP_PLAYLIST_ID}&maxResults=6&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  const playlists: any = useQuery('playlists', () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${process.env.REACT_APP_CHANNEL_ID}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (latestVideos.isLoading || playlists.isLoading) return <p>Loading...</p>

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

  return (
    <div className="home">
      <h2>Latest Video</h2>
      <div className="jumbo-video">
        <VideoFrame
          key={latestVideos.data.items[0].id}
          videoId={latestVideos.data.items[0].snippet.resourceId.videoId}
        />
        <div className="words">
          <h3>{latestVideos.data.items[0].snippet.title}</h3>
          <p className={showDescription ? 'show' : 'hidden'}>
            {latestVideos.data.items[0].snippet.description}
          </p>
          <button onClick={() => updateDesc(!showDescription)}>
            {showDescription ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
      <div className="latest">
        {latestVideos.data.items.map(
          (video: any, index: number) =>
            index > 0 && (
              <div className="video-link">
                <ThumbnailLink key={video.id} video={video} />
                <Link to={`/${video.snippet.resourceId.videoId}`}>
                  <h3>{video.snippet.title}</h3>
                </Link>
              </div>
            ),
        )}
      </div>

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
