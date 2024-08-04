import React from 'react'
import { ActivityIndicator } from 'react-native'

import ModalView from 'react-native-modal'

import { EColors } from '@/common/styles'
import { HP } from '@/common/utils'

export const Loader = () => {
  return (
    <ModalView
      isVisible={true}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}
      backdropOpacity={0.5}
      statusBarTranslucent={true}
      deviceHeight={HP(120)}
      useNativeDriver
    >
      <ActivityIndicator size="large" color={EColors.yellow} />
    </ModalView>
  )
}
