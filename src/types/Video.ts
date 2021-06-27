export interface Video {
    id: string
    snippet: Snippet
}

type Snippet = {
    title: string
    description?: string
    thumbnails: Thumbnails
    resourceId: ResourceId
}

type Thumbnails = {
    maxres: MaxRes
}

type MaxRes = {
    url: string
}

type ResourceId = {
    videoId: string
}
