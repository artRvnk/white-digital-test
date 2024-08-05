import React, { FC } from 'react'
import { LayoutChangeEvent, View } from 'react-native'

import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { TBottomBarProps } from './types'

export const BottomBar: FC<TBottomBarProps> = ({
  children,
  getHeight = () => {},
}) => {
  const { bottom } = useSafeAreaInsets()

  const handleLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout
    getHeight(height)
  }

  const dynamicPaddingBottom = bottom === 0 ? '16' : bottom

  return (
    <View
      onLayout={handleLayout}
      className={`w-full bg-blue-500 flex-row items-center justify-between pb-${dynamicPaddingBottom}`}
    >
      {children}
    </View>
  )
}
