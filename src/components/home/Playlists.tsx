import { Playlist } from '../videos/Playlist'

export const Playlists = () => {
    const playlistsData = {
        items: [],
    }

    return (
        <>
            {playlistsData.items.map((playlist: any, index: number) => (
                <Playlist
                    key={playlist.id}
                    title={playlist.snippet.title}
                    playListId={playlist.id}
                />
            ))}
        </>
    )
}
