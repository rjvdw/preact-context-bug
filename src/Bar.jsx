import { signal } from '@preact/signals'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

const ctx = createContext(signal(0))

export const BarProvider = ctx.Provider

export const useBarContext = () => useContext(ctx)
