import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { key } from '../../firebase'
import { VideoWithId } from '../../types/Video'

export const PlaylistPage = () => {
    const { id } = useParams<{ id: string }>()

    const { isLoading, error, data } = useQuery('playlist-page', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&maxResults=${200}&key=${key}`,
        ).then(res => res.json()),
    )

    if (isLoading) return <h2>Loading Playlist</h2>

    return (
        <div className="playlist-page">
            {data.items.map(
                (video: VideoWithId) =>
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
