import { GET_PLAYLIST } from '../../GraphQL/queries'
import { client } from '../_app'

export default function Playlist({ data }) {
  const { getPlaylist } = data
  return (
    <main className="playlist-page container">
      {getPlaylist.items.map((video: any, index: number) => (
        <a
          href={`/video/${video.snippet.resourceId.videoId}`}
          key={video.id}
          className="video-link"
        >
          <img src={video.snippet.thumbnails.maxres.url} alt="" />
          <h4>{video.snippet.title}</h4>
        </a>
      ))}
    </main>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: GET_PLAYLIST,
    variables: { playlistId: query.playlist, key: process.env.API_KEY },
  })
  return { props: { data } }
}
