import React from 'react'

interface State {
  resolution: Resolution
  setResolution: (resolution: Resolution) => void
}

export enum Resolution {
  HI = 'hi',
  MID = 'mid',
  LO = 'lo',
}

const initialState: State = {
  resolution: Resolution.HI,
  setResolution: (value: Resolution) => undefined,
}

export const ContextObject = React.createContext(initialState)

export default function ({ children }: { children: React.ReactNode }) {
  const [resolution, setResolution] = React.useState(initialState.resolution)

  const state = {
    resolution,
    setResolution,
  }

  return (
    <ContextObject.Provider value={state}>{children}</ContextObject.Provider>
  )
}
