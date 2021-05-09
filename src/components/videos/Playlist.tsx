import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { ThumbnailLink } from './ThumbnailLink'
import arrow from '../../images/arrow.svg'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
  const videos: any = useQuery(playListId, () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=8&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  if (videos.isLoading) return <p>loading video...</p>

  return (
    <>
      {videos.data.items.length >= 1 && (
        <div className="playlist">
          <div className="title">
            <h2>{title}</h2>
            <Link to="/">
              <span>More videos</span>
              <img src={arrow} alt="" />
            </Link>
          </div>

          <div className="videos">
            {videos.data.items.map((video: any) => (
              <div key={video.id} className="video-link">
                <ThumbnailLink video={video} />
                <Link to={`/${video.snippet.resourceId.videoId}`}>
                  <h4>{video.snippet.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
