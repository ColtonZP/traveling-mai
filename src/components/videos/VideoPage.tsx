import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { VideoFrame } from './VideoFrame'

export const VideoPage = () => {
  const { id } = useParams<{ id: string }>()

  const video: any = useQuery(id, () =>
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (video.isLoading) return <h1>Loading...</h1>

  console.log(video)

  return (
    <div>
      <VideoFrame key={id} videoId={video.data.items[0].id} />
      <h2>{video.data.items[0].snippet.title}</h2>
      <p>{video.data.items[0].snippet.description}</p>
    </div>
  )
}
