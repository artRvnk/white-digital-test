import { TextStyle } from 'react-native'

import { EColors, TMarginProps } from '@/common/styles'

export type TStyledTextProps = {
  size?: string
  color?: EColors
  align?: TextStyle['textAlign']
} & TMarginProps
