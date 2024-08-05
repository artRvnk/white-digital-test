import { StyleProp, ViewStyle } from 'react-native'

import { SvgProps } from 'react-native-svg'

import { TSvgKeys } from '@/assets/svg'

export type TIconProps = {
  style?: StyleProp<ViewStyle>
  name: TSvgKeys
  fill?: string
  size?: number
} & SvgProps
