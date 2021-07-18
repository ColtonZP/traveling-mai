import { useQuery } from 'react-query'

import { channelId, key, playlistId } from '../../firebase'
import { PlaylistPreview } from '../../types/PlaylistPreview'
import { Playlist } from '../videos/Playlist'

export const Playlists = () => {
    const { isLoading, error, data } = useQuery('playlists', () =>
        fetch(
            `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=${200}&key=${key}`,
        ).then(res => res.json()),
    )

    if (isLoading) return <h2>Loading Playlist</h2>

    return (
        <>
            {data.items.map((playlist: PlaylistPreview) => (
                <Playlist key={playlist.id} title={playlist.snippet.title} playlistId={playlist.id} />
            ))}
        </>
    )
}

// Todo limit visible videos
