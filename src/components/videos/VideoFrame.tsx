import React from 'react'

type Props = {
    videoId: string
}

export const VideoFrame = ({ videoId }: Props) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="fullscreen; autoplay; encrypted-media"
            title="video"
            className="video"
        />
    )
}
