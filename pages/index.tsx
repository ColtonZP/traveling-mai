import { LatestVideos } from '../components/home/latestVideos'
import { Playlists } from '../components/home/playLists'
import { Playlist } from '../components/videos/Playlist'
import { VideoFrame } from '../components/videos/VideoFrame'
import { GET_LATEST, GET_PLAYLISTS } from '../GraphQL/queries'
import { client } from './_app'

// search https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${}&q=${}&type=video&key=[YOUR_API_KEY]

export default function Home({ latestData, playlistsData }) {
  return (
    <main className="container">
      <div className="home">
        <LatestVideos data={latestData} />
        <Playlists data={playlistsData} />
        {/* {playlistsData.items.map((playlist: any) => (
            <Playlist
              key={playlist.id}
              title={playlist.snippet.title}
              playListId={playlist.id}
            />
          ))} */}
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const latestData = await client
    .query({
      query: GET_LATEST,
      variables: {
        playlistId: process.env.PLAYLIST_ID,
        key: process.env.API_KEY,
      },
    })
    .then(res => res.data.getLatest)

  const playlistsData = await client
    .query({
      query: GET_PLAYLISTS,
      variables: {
        channelId: process.env.CHANNEL_ID,
        key: process.env.API_KEY,
      },
    })
    .then(res => res.data.getPlaylists)

  return { props: { latestData, playlistsData } }
}
