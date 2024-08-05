import React, { ReactElement } from 'react'
import { StatusBar, View } from 'react-native'

import { getDefaultHeaderHeight } from '@react-navigation/elements'
import classNames from 'classnames'
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context'

// import { EColors } from '@/shared/ui/styled'

import { EColors } from '@/common/styles'

// import { BarHeight, HeaderContainer, styles } from './styles'
import { TContainerProps } from './types'

export const Container = ({
  autoHeight = false,
  height,
  children,
  backgroundColor,
}: TContainerProps): ReactElement => {
  const { top } = useSafeAreaInsets()
  const frame = useSafeAreaFrame()

  const defaultHeight = getDefaultHeaderHeight(frame, false, top)

  console.log('defaultHeight', defaultHeight)
  console.log('top', top)

  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={EColors.transparent}
        translucent
      />

      <View className={`h-[${defaultHeight}px] bg-red-500 pt-[${top}px]`}>
        <View className={`h-[${top}px] bg-blue-400 `} />

        {children}
      </View>
    </>
  )
}
