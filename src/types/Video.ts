export interface Video {
    id: string
    snippet: Snippet
}

interface Snippet {
    title: string
    description?: string
    thumbnails: Thumbnails
    resourceId: ResourceId
}

interface Thumbnails {
    maxres: MaxRes
}

interface MaxRes {
    url: string
}

interface ResourceId {
    videoId: string
}
