import React from 'react'
import { useQuery } from 'react-query'
import { VideoFrame } from './VideoFrame'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: any) => {
  const videos: any = useQuery(String(playListId), () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (videos.isLoading) return <p>loading video...</p>

  return (
    <>
      {videos.data.items.length >= 1 && (
        <div>
          <h2>{title}</h2>
          {videos.data.items.map((video: any) => (
            <VideoFrame
              key={video.snippet.resourceId.videoId}
              videoId={video.snippet.resourceId.videoId}
            />
          ))}
        </div>
      )}
    </>
  )
}
