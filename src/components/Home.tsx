import { useState } from 'react'

import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'

import { key } from '../firebase'
import { GET_LATEST, GET_PLAYLISTS } from '../GraphQL/queries'
import { LatestVideos } from './home/LatestVideos'
import { Playlist } from './videos/Playlist'

export const Home = () => {
    const [showDescription, updateDesc] = useState<boolean>(false)
    let latestVideo

    const playlists = useQuery(GET_PLAYLISTS, {
        variables: {
            channelId: 'UCcUvSSGBLtKGtk0ai9Urncw',
            key: key,
        },
    })

    return (
        <div className="home">
            <LatestVideos />

            {/* {playlists.data.items.map((playlist: any) => (
        <Playlist
          key={playlist.id}
          title={playlist.snippet.title}
          playListId={playlist.id}
        />
      ))} */}
        </div>
    )
}
