import { useQuery } from 'react-query'

import { key } from '../../firebase'
import { Comment } from '../../types/Comment'

type Props = {
    videoId: string
}

const Comments = ({ videoId }: Props) => {
    const { isLoading, error, data } = useQuery('comments', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&pageToken=''&key=${key}`,
        ).then(res => res.json()),
    )

    if (isLoading) return <h2>Loading Comments</h2>

    return (
        <div className="comments">
            {data.items.map((comment: Comment) => (
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
