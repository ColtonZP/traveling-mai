import { gql } from '@apollo/client'

export const GET_LATEST = gql`
    query getLatest($playlistId: String!, $key: String!, $maxResults: Int!) {
        latest(playlistId: $playlistId, key: $key, maxResults: $maxResults) {
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
    query getPlaylists($channelId: String!, $key: String!, $maxResults: Int!) {
        playlists(channelId: $channelId, key: $key, maxResults: $maxResults) {
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
    query getPlaylist($playlistId: String!, $key: String!, $maxResults: Int!) {
        playlist(playlistId: $playlistId, key: $key, maxResults: $maxResults) {
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
    query getVideo($id: String!, $key: String!) {
        video(id: $id, key: $key) {
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

export const GET_COMMENTS = gql`
    query getComments($videoId: String!, $key: String!, $pageToken: String) {
        comments(videoId: $videoId, key: $key, pageToken: $pageToken) {
            nextPageToken
            items {
                snippet {
                    topLevelComment {
                        snippet {
                            textOriginal
                            authorDisplayName
                            authorProfileImageUrl
                        }
                    }
                }
            }
        }
    }
`
