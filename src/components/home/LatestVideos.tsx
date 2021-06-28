import { useState } from 'react'

import { useQuery } from '@apollo/client'

import { key, playlistId } from '../../firebase'
import { GET_LATEST } from '../../GraphQL/queries'
import { Video } from '../../types/Video'
import { VideoFrame } from '../videos/VideoFrame'

export const LatestVideos = () => {
    const [showDescription, updateDesc] = useState<boolean>(false)
    const { loading, data } = useQuery(GET_LATEST, {
        variables: {
            playlistId: playlistId,
            key: key,
        },
    })

    const latestVideo: Video = data?.getLatest?.items[0]

    if (loading)
        return (
            <div className="home">
                <h2>Loading...</h2>
                <div className="jumbo-video loading">
                    <div className="video" />
                    <div className="words">
                        <h3 />
                        <p />
                    </div>
                </div>
            </div>
        )

    return (
        <>
            <h2>Latest Videos</h2>
            <div className="jumbo-video">
                <VideoFrame key={latestVideo?.id} videoId={latestVideo?.snippet.resourceId.videoId} />
                <div className="words">
                    <h3>{latestVideo?.snippet.title}</h3>
                    <p>
                        {showDescription
                            ? latestVideo?.snippet?.description
                            : latestVideo?.snippet?.description?.substring(0, 140) + '...'}
                    </p>
                    <button onClick={() => updateDesc(!showDescription)}>
                        {showDescription ? 'Show less' : 'Show more'}
                    </button>
                </div>
            </div>
            <div className="latest">
                {data?.getLatest.items.map(
                    (video: Video, index: number) =>
                        index > 0 && (
                            <a
                                href={`/video/${video.snippet.resourceId.videoId}`}
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
