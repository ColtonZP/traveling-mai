import { Video } from './Video'

export interface PlaylistPreview {
    id: string
    snippet: PlaylistSnippet
}

type PlaylistSnippet = {
    title: string
}
