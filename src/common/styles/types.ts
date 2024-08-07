// import { EFonts } from './font'

import { EColors } from './colors'

export type TFont = {
  size?: string
  color?: EColors
  // family?: EFonts
  style?: 'normal' | 'italic'
  align?: 'center' | 'left' | 'right'
}

export type TMargin = {
  mTop?: string
  mLeft?: string
  mRight?: string
  mBottom?: string
}

export type TFlex = {
  direction?: TFlexDirectionVariants
  align?: TFlexAlignVariants
  justify?: TFlexJustifyVariants
  wrap?: TFlexWrapVariants
}

export type TColor = {
  color: EColors
}

export type TFlexDirectionVariants =
  | 'row'
  | 'column'
  | 'row-reverse'
  | 'column-reverse'

export type TFlexAlignVariants =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline'

export type TFlexJustifyVariants =
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'flex-start'
  | 'flex-end'

export type TFlexWrapVariants = 'wrap' | 'nowrap'
