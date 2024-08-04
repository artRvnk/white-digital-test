import React, { ReactNode } from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import * as C from './list'

type TContext = {
  children: ReactNode
}

export const Context = ({ children }: TContext) => {
  return (
    <>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <C.SafeAreaWrapper>
          <C.LanguageProvider>
            <C.LoaderProvider>{children}</C.LoaderProvider>
          </C.LanguageProvider>
        </C.SafeAreaWrapper>
      </GestureHandlerRootView>
    </>
  )
}
