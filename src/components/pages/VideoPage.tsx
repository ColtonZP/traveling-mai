import { useQuery } from 'react-query'
import { useParams } from 'react-router'

import { key } from '../../firebase'
import blankVideoScreen from '../../images/blankVideoScreen.png'
import Comments from '../videos/Comments'
import { VideoFrame } from '../videos/VideoFrame'

export const VideoPage = () => {
    const { id } = useParams<{ id: string }>()

    const { isLoading, error, data } = useQuery('video-page', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails&id=${id}&key=${key}`,
        ).then(res => res.json()),
    )

    if (isLoading) return <h2>Loading Video</h2>

    return (
        <div className="video-page">
            <div className="video-frame">
                <img src={blankVideoScreen} alt="" aria-hidden="true" />
                <VideoFrame key={id} videoId={id} />
            </div>
            <h2>{data.items[0].snippet.title}</h2>
            <p>{data.items[0].snippet.description}</p>
            <Comments videoId={id} />
        </div>
    )
}
