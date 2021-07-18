import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

import { key } from '../../firebase'
import arrow from '../../images/arrow.svg'
import { Video } from '../../types/Video'

type Props = {
    title: string
    playlistId: string
}

export const Playlist = ({ title, playlistId }: Props) => {
    const { isLoading, error, data } = useQuery(title, () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${5}&key=${key}`,
        ).then(res => res.json()),
    )

    console.log({ title, data })

    if (isLoading) return <h2>loading playlist...</h2>

    return (
        <>
            {data.items.length >= 1 && (
                <div className="playlist">
                    <div className="title">
                        <h2>{title}</h2>
                        {data.items.length > 4 && (
                            <Link to={`/playlist/${playlistId}`}>
                                <span>More videos</span>
                                <img src={arrow} alt="" />
                            </Link>
                        )}
                    </div>

                    <div className="videos">
                        {data.items.map(
                            (video: Video) =>
                                video.snippet.title !== 'Private video' && (
                                    <Link
                                        to={`/video/${video.snippet.resourceId.videoId}`}
                                        key={video.id}
                                        className="video-link"
                                    >
                                        <img src={video.snippet.thumbnails.maxres?.url} alt="" />
                                        <h4>{video.snippet.title}</h4>
                                    </Link>
                                ),
                        )}
                    </div>
                </div>
            )}
        </>
    )
}
