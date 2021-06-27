import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'

import { key } from '../../firebase'
import { GET_VIDEO } from '../../GraphQL/queries'
import { VideoFrame } from '../videos/VideoFrame'

export default function Video() {
    const { id } = useParams<{ id: string }>()

    const { loading, data } = useQuery(GET_VIDEO, {
        variables: {
            id: id,
            key: key,
        },
    })

    if (loading) return <h1>Loading...</h1>

    return (
        <main className="container">
            <VideoFrame key={data.getVideo.id} videoId={data.getVideo.items[0].id} />
            <h2>{data.getVideo.items[0].snippet.title}</h2>
            <p>{data.getVideo.items[0].snippet.description}</p>
        </main>
    )
}
