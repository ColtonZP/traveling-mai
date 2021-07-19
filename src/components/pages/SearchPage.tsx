import { useQuery } from 'react-query'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { key } from '../../firebase'
import { VideoWithVideoId } from '../../types/Video'

export const SearchPage = () => {
    const { id } = useParams<{ id: string }>()

    const { isLoading, error, data } = useQuery('video-page', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UC29vLPlafHcsqZu3L-Rk_pA&maxResults=20&q=${id}&key=${key}`,
        ).then(res => res.json()),
    )

    console.log(data)

    if (isLoading) return <h2>Loading Video</h2>

    return (
        <div>
            <h2>Search results for {id}</h2>

            {data.items.map((video: VideoWithVideoId) => (
                <Link to={`/video/${video.id.videoId}`} key={video.id.videoId} className="video-link">
                    <img src={video.snippet.thumbnails.medium.url} alt="" />
                    <h4>{video.snippet.title}</h4>
                </Link>
            ))}
        </div>
    )
}
