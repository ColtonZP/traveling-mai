import { useState } from 'react'

import { useQuery } from 'react-query'

import { key, playlistId } from '../../firebase'
import blankVideoScreen from '../../images/blankVideoScreen.png'
import { VideoWithId } from '../../types/Video'
import { VideoFrame } from '../videos/VideoFrame'

export const LatestVideos = () => {
    const [showDescription, updateDesc] = useState<boolean>(false)

    const { isLoading, error, data } = useQuery('latest', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${5}&key=${key}`,
        ).then(res => res.json()),
    )

    const latestVideo: VideoWithId = !isLoading && data.items[0]

    if (isLoading)
        return (
            <div className="home">
                <h2>Loading Latest Videos</h2>
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
                <div className="jumbo-video-player">
                    <img src={blankVideoScreen} alt="" aria-hidden="true" />
                    <VideoFrame key={latestVideo.id || '123a'} videoId={latestVideo.snippet.resourceId.videoId} />
                </div>
                <div className="words">
                    <h3>{latestVideo.snippet.title}</h3>
                    <p>
                        {showDescription
                            ? latestVideo.snippet.description
                            : latestVideo.snippet.description?.substring(0, 140) + '...'}
                    </p>
                    <button onClick={() => updateDesc(!showDescription)}>
                        {showDescription ? 'Show less' : 'Show more'}
                    </button>
                </div>
            </div>
            <div className="latest">
                {data.items.map(
                    (video: VideoWithId, index: number) =>
                        index > 0 && (
                            <a
                                href={`/video/${video.snippet.resourceId.videoId}`}
                                className="video-link"
                                key={video.id}
                            >
                                <img src={video.snippet.thumbnails.maxres?.url} alt="" />
                                <h4>{video.snippet.title}</h4>
                            </a>
                        ),
                )}
            </div>
        </>
    )
}
