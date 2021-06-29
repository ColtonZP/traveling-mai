import { useQuery } from '@apollo/client'

import { channelId, key } from '../../firebase'
import { GET_PLAYLISTS } from '../../GraphQL/queries'
import { PlaylistPreview } from '../../types/PlaylistPreview'
import { Playlist } from '../videos/Playlist'

export const Playlists = () => {
    const { loading, data } = useQuery(GET_PLAYLISTS, {
        variables: {
            channelId: channelId,
            key: key,
        },
    })

    if (loading) return <h2>Loading Playlist</h2>

    return (
        <>
            {data.getPlaylists.items.map((playlist: PlaylistPreview) => (
                <Playlist key={playlist.id} title={playlist.snippet.title} playListId={playlist.id} />
            ))}
        </>
    )
}

// Todo limit visible videos
