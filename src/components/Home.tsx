import { LatestVideos } from './home/LatestVideos'
import { Playlists } from './home/Playlists'

export const Home = () => {
    return (
        <div className="home">
            <LatestVideos />
            <Playlists />
        </div>
    )
}
