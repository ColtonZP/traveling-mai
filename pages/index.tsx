import { useState } from 'react'

// import { AuthProvider } from '../components/AuthContext'
// import { SignIn } from '../components/SignIn'
// import { Home } from '../components/videos/Home'
// import { PlaylistPage } from '../components/videos/PlaylistPage'
// import { VideoPage } from '../components/videos/VideoPage'
import { data as latestData } from '../temp/getLatest'

// search https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${}&q=${}&type=video&key=[YOUR_API_KEY]

export default function App() {
  const [showDescription, updateDesc] = useState<boolean>(false)
  const latestVideo: any = latestData.items[0]

  return (
    <>
      <header className="container">
        <a href="/">
          <h1>Traveling Mai</h1>
        </a>
        {/* <SignIn /> */}
      </header>
      <main className="container">
        <div className="home">
          <h2>Latest Videos</h2>
          <div className="jumbo-video">
            {/* <VideoFrame
          key={latestVideo?.id}
          videoId={latestVideo?.snippet.resourceId.videoId}
        /> */}
            <div className="words">
              <h3>{latestVideo?.snippet.title}</h3>
              <p>
                {showDescription
                  ? latestVideo?.snippet.description
                  : latestVideo?.snippet.description.substring(0, 140) + '...'}
              </p>
              <button onClick={() => updateDesc(!showDescription)}>
                {showDescription ? 'Show less' : 'Show more'}
              </button>
            </div>
          </div>
          <div className="latest">
            {latestData.items.map(
              (video: any, index: number) =>
                index > 0 && (
                  <a
                    href={`/${video.snippet.resourceId.videoId}`}
                    className="video-link"
                    key={video.id}
                  >
                    <img src={video.snippet.thumbnails.maxres.url} alt="" />
                    <h4>{video.snippet.title}</h4>
                  </a>
                ),
            )}
          </div>

          {/* {playlists.data.items.map((playlist: any) => (
        <Playlist
          key={playlist.id}
          title={playlist.snippet.title}
          playListId={playlist.id}
        />
      ))} */}
        </div>
      </main>
    </>
  )
}
