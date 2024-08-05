import React from 'react'

import * as Svg from '@/assets/svg'

import { EColors } from '@/common/styles'

import { TIconProps } from './types'

// icon component
export const Icon: React.FC<TIconProps> = ({
  name,
  fill,
  size = 24,
  height,
  width,
  style,
  ...props
}) => {
  // determine the fill color
  const currentFill = fill || EColors.black

  // get the SVG component by name
  const IconSvg = Svg[name]

  // ensure IconSvg is a valid component
  if (!IconSvg) {
    console.error(`Icon with name ${name} does not exist.`)
    return null
  }

  // tailwind CSS classes
  const tailwindClasses = `
    w-${width ?? size} 
    h-${height ?? size} 
    text-${currentFill}
  `.trim()

  return (
    <div className={tailwindClasses}>
      <IconSvg
        style={style}
        fill={currentFill}
        {...props} // correctly pass the rest of the props
      />
    </div>
  )
}
