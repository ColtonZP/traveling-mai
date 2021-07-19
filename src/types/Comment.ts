export interface Comment {
    snippet: CommentSnippet
}

interface CommentSnippet {
    topLevelComment: TopLevelComment
}

interface TopLevelComment {
    id: string
    snippet: TopLevelSnippet
}

interface TopLevelSnippet {
    textOriginal: string
    authorDisplayName: string
    authorProfileImageUrl: string
}
