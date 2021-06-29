export interface Comment {
    snippet: CommentSnippet
}

type CommentSnippet = {
    topLevelComment: TopLevelComment
}

type TopLevelComment = {
    id: string
    snippet: TopLevelSnippet
}

type TopLevelSnippet = {
    textOriginal: string
    authorDisplayName: string
    authorProfileImageUrl: string
}
