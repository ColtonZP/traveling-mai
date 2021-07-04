import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'

import { key } from '../../firebase'
import { GET_VIDEO } from '../../GraphQL/queries'
import Comments from '../videos/Comments'
import { VideoFrame } from '../videos/VideoFrame'

export default function Video() {
    const { id } = useParams<{ id: string }>()

    const { loading, data } = useQuery(GET_VIDEO, {
        variables: {
            id: id,
            key: key,
        },
    })

    if (loading) return <h2>Loading Video</h2>

    return (
        <div className="video-page">
            <VideoFrame key={id} videoId={id} />
            <h2>{data.video.items[0].snippet.title}</h2>
            <p>{data.video.items[0].snippet.description}</p>
            <Comments videoId={id} />
        </div>
    )
}
