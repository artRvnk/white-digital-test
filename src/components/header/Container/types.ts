import { ReactNode } from 'react'

import { EColors } from '@/common/styles'

export type TContainerProps = {
  children: ReactNode
  height?: number
  autoHeight?: boolean
  backgroundColor?: EColors
}
