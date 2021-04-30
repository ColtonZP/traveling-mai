import React from 'react'
import { useParams } from 'react-router'
import { VideoFrame } from './VideoFrame'

export const VideoPage = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div>
      <VideoFrame key={id} videoId={id} />
    </div>
  )
}
