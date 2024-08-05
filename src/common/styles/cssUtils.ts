import classNames from 'classnames'

import { EColors } from './colors'
import { EFonts } from './fonts'
import { TFlexProps, TFontProps, TMarginProps } from './types'

export const FONT = ({
  size = '16px',
  align = 'left',
  style = 'normal',
  color = EColors.black,
  family = EFonts.abel,
}: TFontProps) => {
  return classNames(
    size ? `text-${size}` : '',
    color ? `text-${color}` : '',
    family ? `font-${family}` : '',
    align === 'center'
      ? 'text-center'
      : align === 'right'
        ? 'text-right'
        : 'text-left',
    style === 'italic' ? 'italic' : 'not-italic',
  )
}

export const MARGIN = ({
  mTop = '0px',
  mBottom = '0px',
  mRight = '0px',
  mLeft = '0px',
}: TMarginProps) => {
  const marginClasses = classNames({
    [`mt-${mTop}`]: mTop !== '0px',
    [`mb-${mBottom}`]: mBottom !== '0px',
    [`ml-${mLeft}`]: mLeft !== '0px',
    [`mr-${mRight}`]: mRight !== '0px',
  })

  const marginStyle = {
    marginTop: mTop,
    marginBottom: mBottom,
    marginLeft: mLeft,
    marginRight: mRight,
  }

  return { className: marginClasses, style: marginStyle }
}

export const FLEX = ({
  direction = 'row',
  align = 'center',
  justify = 'center',
  wrap = 'nowrap',
}: TFlexProps) => {
  return classNames(
    'flex',
    direction === 'row'
      ? 'flex-row'
      : direction === 'column'
        ? 'flex-col'
        : direction === 'row-reverse'
          ? 'flex-row-reverse'
          : direction === 'column-reverse'
            ? 'flex-col-reverse'
            : '',

    align === 'center'
      ? 'items-center'
      : align === 'flex-start'
        ? 'items-start'
        : align === 'flex-end'
          ? 'items-end'
          : align === 'stretch'
            ? 'items-stretch'
            : align === 'baseline'
              ? 'items-baseline'
              : '',

    justify === 'center'
      ? 'justify-center'
      : justify === 'space-between'
        ? 'justify-between'
        : justify === 'space-around'
          ? 'justify-around'
          : justify === 'space-evenly'
            ? 'justify-evenly'
            : justify === 'flex-start'
              ? 'justify-start'
              : justify === 'flex-end'
                ? 'justify-end'
                : '',

    wrap === 'wrap' ? 'flex-wrap' : wrap === 'nowrap' ? 'flex-nowrap' : '',
  )
}
