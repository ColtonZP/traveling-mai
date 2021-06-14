import { LatestVideos } from '../components/home/LatestVideos'
import { Playlists } from '../components/home/Playlists'
import { GET_LATEST, GET_PLAYLISTS } from '../GraphQL/queries'
import { client } from './_app'

import Head from 'next/head'

// search https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${}&q=${}&type=video&key=[YOUR_API_KEY]

export default function Home({ latestData, playlistsData }) {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="MP-dP9mdVxusdz3LHLPYMAKOOzpULP7IVVjvKpXD9_4"
        />
      </Head>
      <main className="container">
        <div className="home">
          <LatestVideos data={latestData} />
          <Playlists playlistsData={playlistsData} />
        </div>
      </main>
    </>
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
    .then(res => !res.loading && res.data.getLatest)

  const playlistsData = await client
    .query({
      query: GET_PLAYLISTS,
      variables: {
        channelId: process.env.CHANNEL_ID,
        key: process.env.API_KEY,
      },
    })
    .then(async res => !res.loading && res.data.getPlaylists)
    .catch(res => console.log('failed to load playlists', res))

  // const playlistData = await client
  //   .query({
  //     query: GET_PLAYLISTS,
  //     variables: {
  //       channelId: process.env.CHANNEL_ID,
  //       key: process.env.API_KEY,
  //     },
  //   })
  //   .then(async res => !res.loading && [...playlistData, res.data.getPlaylists])
  //   .catch(res => console.log('failed to load playlists', res))

  // ! get video title to be SSR, currently unreliable below
  // const playlistsData = await client
  //   .query({
  //     query: GET_PLAYLISTS,
  //     variables: {
  //       channelId: process.env.CHANNEL_ID,
  //       key: process.env.API_KEY,
  //     },
  //   })
  //   .then(async res => {
  //     if (!res.loading) {
  //       res.data.getPlaylists.items.map(async playlist => {
  //         playlist &&
  //           (await client
  //             .query({
  //               query: GET_PLAYLIST,
  //               variables: {
  //                 playlistId: playlist.id,
  //                 key: process.env.API_KEY,
  //               },
  //             })
  //             .then(res => {
  //               console.log(res)
  //               !res.loading && playlistData.push(res.data.getPlaylist)
  //             })
  //             .catch(res =>
  //               console.log('failed to load playlist details', res),
  //             ))
  //       })
  //       return res.data.getPlaylists
  //     }
  //   })
  //   .catch(res => console.log('failed to load playlists', res))

  return { props: { latestData, playlistsData } }
}
