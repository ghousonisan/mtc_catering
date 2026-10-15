import { createContext, useContext } from 'react'

export const ApplyContext = createContext({ openApply: () => {} })

export const useApply = () => useContext(ApplyContext)
