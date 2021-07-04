import React from 'react'

import { useQuery } from '@apollo/client'

import { key } from '../../firebase'
import { GET_COMMENTS } from '../../GraphQL/queries'
import { Comment } from '../../types/Comment'

type Props = {
    videoId: string
}

const Comments = ({ videoId }: Props) => {
    const { loading, data } = useQuery(GET_COMMENTS, {
        variables: {
            videoId: videoId,
            key: key,
            pageToken: '',
        },
    })

    if (loading) return <h2>Loading Comments</h2>

    return (
        <div className="comments">
            {data.comments.items.map((comment: Comment) => (
                <article key={comment.snippet.topLevelComment.id}>
                    <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                    <div className="text">
                        <span className="user-name">{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                        <span>{comment.snippet.topLevelComment.snippet.textOriginal}</span>
                    </div>
                </article>
            ))}
        </div>
    )
}

export default Comments
