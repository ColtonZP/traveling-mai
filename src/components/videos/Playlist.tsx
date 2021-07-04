import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { key } from '../../firebase'
import { GET_PLAYLIST } from '../../GraphQL/queries'
import arrow from '../../images/arrow.svg'
import { Video } from '../../types/Video'

type Props = {
    title: string
    playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
    const { loading, data } = useQuery(GET_PLAYLIST, {
        variables: {
            playlistId: playListId,
            key: key,
            maxResults: 9,
        },
    })

    if (loading) return <h2>loading playlist...</h2>

    return (
        <>
            {data.playlist.items.length >= 1 && (
                <div className="playlist">
                    <div className="title">
                        <h2>{title}</h2>
                        {data.playlist.items.length >= 8 && (
                            <Link to={`/playlist/${playListId}`}>
                                <span>More videos</span>
                                <img src={arrow} alt="" />
                            </Link>
                        )}
                    </div>

                    <div className="videos">
                        {data.playlist.items.map(
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
