import { Playlist } from '../videos/Playlist'

export const Playlists = ({ playlistsData, playlistData }) => {
  return (
    <>
      {playlistsData.items.map((playlist: any, index: number) => (
        <Playlist
          key={playlist.id}
          title={playlist.snippet.title}
          playListId={playlist.id}
          playlistData={playlistData[index]}
        />
      ))}
    </>
  )
}
