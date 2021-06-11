import { Playlist } from '../videos/Playlist'

export const Playlists = ({ playlistsData }) => {
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
