import React, { useState, createContext } from 'react'

import { Modal } from '@/components/modal'

import { TChildrenContext } from '../types'

import { TLoaderProps } from './types'

export const LoaderContext = createContext<TLoaderProps>({
  setLoading: () => {},
  isLoading: false,
})

export const LoaderProvider = ({ children }: TChildrenContext) => {
  const [isLoading, setLoading] = useState<boolean>(false)

  return (
    <LoaderContext.Provider value={{ setLoading, isLoading }}>
      {isLoading && <Modal.Loader />}
      {children}
    </LoaderContext.Provider>
  )
}
