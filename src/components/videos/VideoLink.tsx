import React from 'react'
import { Link } from 'react-router-dom'

export const VideoLink = ({ video }: { video: any }) => {
  return (
    <Link to={`/${video.snippet.resourceId.videoId}`}>
      <img src={video.snippet.thumbnails.high.url} alt="" />
    </Link>
  )
}
