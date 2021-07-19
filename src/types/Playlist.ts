import { Video } from './Video'

export interface PlaylistPreview {
    id: string
    snippet: PlaylistSnippet
}

interface PlaylistSnippet {
    title: string
}
