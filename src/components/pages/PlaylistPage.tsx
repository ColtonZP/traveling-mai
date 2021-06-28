import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { key } from '../../firebase'
import { GET_PLAYLIST } from '../../GraphQL/queries'
import { Video } from '../../types/Video'

export const PlaylistPage = () => {
    const { id } = useParams<{ id: string }>()

    const { loading, data } = useQuery(GET_PLAYLIST, {
        variables: {
            playlistId: id,
            key: key,
        },
    })

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="playlist-page">
            {data.getPlaylist.items.map(
                (video: Video) =>
                    video.snippet.title !== 'Private video' && (
                        <Link to={`/video/${video.snippet.resourceId.videoId}`} key={video.id} className="video-link">
                            <img src={video.snippet.thumbnails.maxres?.url} alt="" />
                            <h4>{video.snippet.title}</h4>
                        </Link>
                    ),
            )}
        </div>
    )
}
