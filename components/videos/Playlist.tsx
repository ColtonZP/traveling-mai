import arrow from '../../public/arrow.svg'
import { data as videos } from '../../temp/getPlaylist'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: Props) => {
  // get playlist info
  console.log(videos.items.length)
  return (
    <>
      {videos.items.length >= 1 && (
        <div className="playlist">
          <div className="title">
            <h2>{title}</h2>
            {videos.items.length >= 9 && (
              <a href={`/playlist/${playListId}`}>
                <span>More videos</span>
                <img src={arrow} alt="" />
              </a>
            )}
          </div>

          <div className="videos">
            {videos.items.map(
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
