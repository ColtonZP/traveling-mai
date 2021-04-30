import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { VideoFrame } from './VideoFrame'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
  const videos: any = useQuery(String(playListId), () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=5&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (videos.isLoading) return <p>loading video...</p>

  // console.log(videos.data)

  return (
    <>
      {videos.data.items.length >= 1 && (
        <div>
          <h2>{title}</h2>
          {videos.data.items.map((video: any) => (
            <Link key={video.id} to={`/${video.snippet.resourceId.videoId}`}>
              <img src={video.snippet.thumbnails.high.url} alt="" />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
