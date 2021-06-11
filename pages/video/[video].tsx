import { VideoFrame } from '../../components/videos/VideoFrame'
import { GET_VIDEO } from '../../GraphQL/queries'
import { client } from '../_app'

export default function Video({ data }) {
  const { getVideo } = data

  return (
    <main className="container">
      <VideoFrame key={getVideo.id} videoId={getVideo.items[0].id} />
      <h2>{getVideo.items[0].snippet.title}</h2>
      <p>{getVideo.items[0].snippet.description}</p>
    </main>
  )
}

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: GET_VIDEO,
    variables: { id: query.video, key: process.env.API_KEY },
  })
  return { props: { data } }
}
