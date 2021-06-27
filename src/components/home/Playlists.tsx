import { useState } from 'react'

import { useQuery } from '@apollo/client'

import { key } from '../../firebase'
import { GET_PLAYLISTS } from '../../GraphQL/queries'
import { PlaylistPreview } from '../../types/PlaylistPreview'
import { Playlist } from '../videos/Playlist'

export const Playlists = () => {
    const { loading, data } = useQuery(GET_PLAYLISTS, {
        variables: {
            channelId: 'UCcUvSSGBLtKGtk0ai9Urncw',
            key: key,
        },
    })

    console.log({ playlist: data })

    if (loading)
        return (
            <div className="home">
                <h2>Loading...</h2>
                <div className="jumbo-video loading">
                    <div className="video" />
                    <div className="words">
                        <h3 />
                        <p />
                    </div>
                </div>
            </div>
        )

    return (
        <>
            {data.getPlaylists.items.map((playlist: PlaylistPreview) => (
                <Playlist key={playlist.id} title={playlist.snippet.title} playListId={playlist.id} />
            ))}
        </>
    )
}
