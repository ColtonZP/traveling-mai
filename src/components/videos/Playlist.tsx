import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { VideoFrame } from './VideoFrame'
import { ThumbnailLink } from './ThumbnailLink'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
  const videos: any = useQuery(playListId, () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=5&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (videos.isLoading) return <p>loading video...</p>

  console.log(videos.data)

  return (
    <>
      {videos.data.items.length >= 1 && (
        <div className="playlist">
          <h2>{title}</h2>
          {videos.data.items.map((video: any) => (
            <div key={video.id} className="video-link">
              <ThumbnailLink video={video} />
              <Link to={`/${video.snippet.resourceId.videoId}`}>
                <h3>{video.snippet.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  )
}
