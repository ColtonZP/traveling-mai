import { gql } from '@apollo/client'

export const GET_LATEST = gql`
    query latest($playlistId: String!, $key: String!) {
        getLatest(playlistId: $playlistId, key: $key) {
            items {
                id
                snippet {
                    title
                    description
                    thumbnails {
                        maxres {
                            url
                        }
                    }
                    resourceId {
                        videoId
                    }
                }
            }
        }
    }
`

export const GET_PLAYLISTS = gql`
    query playlists($channelId: String!, $key: String!) {
        getPlaylists(channelId: $channelId, key: $key) {
            items {
                id
                snippet {
                    title
                    thumbnails {
                        maxres {
                            url
                        }
                    }
                }
            }
        }
    }
`

export const GET_PLAYLIST = gql`
    query playlist($playlistId: String!, $key: String!) {
        getPlaylist(playlistId: $playlistId, key: $key) {
            items {
                id
                snippet {
                    title
                    description
                    thumbnails {
                        maxres {
                            url
                        }
                    }
                    resourceId {
                        videoId
                    }
                }
            }
        }
    }
`

export const GET_VIDEO = gql`
    query video($id: String!, $key: String!) {
        getVideo(id: $id, key: $key) {
            items {
                id
                snippet {
                    title
                    description
                    thumbnails {
                        maxres {
                            url
                        }
                    }
                    resourceId {
                        videoId
                    }
                }
            }
        }
    }
`
