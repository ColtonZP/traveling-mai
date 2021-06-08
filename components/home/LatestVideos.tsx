import { useState } from 'react'

import { GET_LATEST } from '../../GraphQL/queries'
import { client } from '../../pages/_app'
import { VideoFrame } from '../videos/VideoFrame'

export const LatestVideos = ({ data }) => {
  const [showDescription, updateDesc] = useState<boolean>(false)
  const latestVideo: any = data.items[0]

  return (
    <>
      <h2>Latest Videos</h2>
      <div className="jumbo-video">
        <VideoFrame
          key={latestVideo?.id}
          videoId={latestVideo?.snippet.resourceId.videoId}
        />
        <div className="words">
          <h3>{latestVideo?.snippet.title}</h3>
          <p>
            {showDescription
              ? latestVideo?.snippet.description
              : latestVideo?.snippet.description.substring(0, 140) + '...'}
          </p>
          <button onClick={() => updateDesc(!showDescription)}>
            {showDescription ? 'Show less' : 'Show more'}
          </button>
        </div>
      </div>
      <div className="latest">
        {data.items.map(
          (video: any, index: number) =>
            index > 0 && (
              <a
                href={`/${video.snippet.resourceId.videoId}`}
                className="video-link"
                key={video.id}
              >
                <img src={video.snippet.thumbnails.maxres.url} alt="" />
                <h4>{video.snippet.title}</h4>
              </a>
            ),
        )}
      </div>
    </>
  )
}
