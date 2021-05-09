import React from 'react'
import { Link } from 'react-router-dom'

export const ThumbnailLink = ({ video }: { video: any }) => {
  return (
    <Link to={`/${video.snippet.resourceId.videoId}`}>
      <img src={video.snippet.thumbnails.medium.url} alt="" />
    </Link>
  )
}
