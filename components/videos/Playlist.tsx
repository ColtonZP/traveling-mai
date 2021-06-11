import { useQuery } from '@apollo/client'

import { GET_PLAYLIST } from '../../GraphQL/queries'
import arrow from '../../public/arrow.svg'
import { data as videos } from '../../temp/getPlaylist'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
  const { loading, data } = useQuery(GET_PLAYLIST, {
    variables: { playlistId: playListId, key: process.env.API_KEY },
  })

  console.log(data)

  if (loading) return <h1>LOADING</h1>

  return (
    <>
      {data.getPlaylist.items.length >= 1 && (
        <div className="playlist">
          <div className="title">
            <h2>{title}</h2>
            {data.getPlaylist.items.length >= 9 && (
              <a href={`/playlist/${playListId}`}>
                <span>More videos</span>
                <img src={arrow} alt="" />
              </a>
            )}
          </div>

          <div className="videos">
            {data.getPlaylist.items.map(
              (video: any, index: number) =>
                index < 8 && (
                  <a
                    href={`/video/${video.snippet.resourceId.videoId}`}
                    key={video.id}
                    className="video-link"
                  >
                    <img src={video.snippet.thumbnails.maxres.url} alt="" />
                    <h4>{video.snippet.title}</h4>
                  </a>
                ),
            )}
          </div>
        </div>
      )}
    </>
  )
}
