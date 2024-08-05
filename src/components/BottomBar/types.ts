import { ReactNode } from 'react'

export type TBottomBarProps = {
  children?: ReactNode
  getHeight?: (value: number) => void
}
