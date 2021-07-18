import { useEffect, useState } from 'react'

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
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${10}&key=${key}`,
        ).then(res => res.json()),
    )

    const [playlist, updatePlaylist] = useState<any>(undefined)

    useEffect(() => {
        if (data) {
            updatePlaylist(data.items.filter((item: Video) => item.snippet.title !== 'Private video'))
        }
    }, [isLoading, data])

    if (isLoading) return <h2>loading playlist...</h2>

    if (playlist !== undefined) {
        return (
            <>
                {playlist.length >= 1 && (
                    <div className="playlist">
                        <div className="title">
                            <h2>{title}</h2>
                            {playlist.length > 5 && (
                                <Link to={`/playlist/${playlistId}`}>
                                    <span>More videos</span>
                                    <img src={arrow} alt="" />
                                </Link>
                            )}
                        </div>

                        <div className="videos">
                            {playlist.map((video: Video, index: number) => {
                                return (
                                    index < 4 && (
                                        <Link
                                            to={`/video/${video.snippet.resourceId.videoId}`}
                                            key={video.id}
                                            className="video-link"
                                        >
                                            <img src={video.snippet.thumbnails.maxres?.url} alt="" />
                                            <h4>{video.snippet.title}</h4>
                                        </Link>
                                    )
                                )
                            })}
                        </div>
                    </div>
                )}
            </>
        )
    }

    return <h1>{title}</h1>
}
