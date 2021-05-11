import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

export const PlaylistPage = () => {
  const { id } = useParams<{ id: string }>()

  const videos: any = useQuery(id, () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=200&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (videos.isLoading) return <h1>Loading...</h1>

  return (
    <>
      <h2>{}</h2>
      <div className="playlist-page">
        {videos.data.items.map((video: any, index: number) => (
          <Link
            to={`/${video.snippet.resourceId.videoId}`}
            key={video.id}
            className="video-link"
          >
            <img src={video.snippet.thumbnails.medium.url} alt="" />
            <h4>{video.snippet.title}</h4>
          </Link>
        ))}
      </div>
    </>
  )
}
