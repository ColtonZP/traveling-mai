import React from 'react'

type Props = {
    className?: string
    videoId: string
}

export const VideoFrame = ({ className, videoId }: Props) => {
    return (
        <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="fullscreen; autoplay; encrypted-media"
            title="video"
            className="video"
        />
    )
}
