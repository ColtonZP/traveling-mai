export interface VideoWithId extends Video {
    id: string
}

export interface VideoWithVideoId extends Video {
    id: Id
}

export interface Video {
    snippet: Snippet
}

interface Id {
    videoId: string
}

interface Snippet {
    title: string
    description?: string
    thumbnails: Thumbnails
    resourceId: ResourceId
}

interface Thumbnails {
    maxres: MaxRes
    medium: Medium
}

interface MaxRes {
    url: string
}

interface Medium {
    url: string
}

interface ResourceId {
    videoId: string
}
