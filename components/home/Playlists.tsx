import { Playlist } from '../videos/Playlist'

export const Playlists = ({ data }) => {
  return (
    <>
      {data.items.map((playlist: any) => (
        <Playlist
          key={playlist.id}
          title={playlist.snippet.title}
          playListId={playlist.id}
        />
      ))}
    </>
  )
}
