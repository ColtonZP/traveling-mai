import React from 'react'

import { useQuery } from '@apollo/client'

import { key } from '../../firebase'
import { GET_COMMENTS } from '../../GraphQL/queries'

const Comments = ({ videoId }: any) => {
    const { loading, data } = useQuery(GET_COMMENTS, {
        variables: {
            videoId: videoId,
            key: key,
            pageToken: '',
        },
    })

    if (loading) return <h2>Loading...</h2>

    return (
        <div className="comments">
            {data.getComments.items.map((comment: any) => (
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