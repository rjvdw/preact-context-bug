import { signal } from '@preact/signals'
import { createContext } from 'preact'
import { useContext } from 'preact/hooks'

const ctxBaz = createContext(signal(0))

export const BazProvider = ctxBaz.Provider

export const useBazContext = () => useContext(ctxBaz)
