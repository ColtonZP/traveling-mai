import React from 'react'
import { useQuery } from 'react-query'

type Props = {
  title: string
  playListId: string
}

export const Playlist = ({ title, playListId }: any) => {
  const videos: any = useQuery('videos', () =>
    fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playListId}&maxResults=50&key=${process.env.REACT_APP_API_KEY}`,
    ).then(res => res.json()),
  )

  console.log(videos)
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
