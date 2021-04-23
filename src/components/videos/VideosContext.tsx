import React, { createContext, useContext, useState } from 'react'

const videos = {
  results: '',
}

const VideoContext = createContext({
  results: '',
})

export function useVideoContext() {
  return useContext(VideoContext)
}

export const VideoProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true)

  return (
    <VideoContext.Provider value={videos}>
      {!loading && children}
    </VideoContext.Provider>
  )
}
