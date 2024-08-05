import React from 'react'
import { Text } from 'react-native'

export const H1: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Text
      className={'font-abel text-24px font-regular leading-30px text-center'}
    >
      {children}
    </Text>
  )
}

export const Body1A: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      className={'font-abel text-16px font-regular leading-20px text-center'}
    >
      {children}
    </Text>
  )
}

export const Body1SF: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      className={'font-sf_pro text-16px font-regular leading-20px text-center'}
    >
      {children}
    </Text>
  )
}

export const Body2A: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      className={'font-abel text-14px font-regular leading-18px text-center'}
    >
      {children}
    </Text>
  )
}

export const Body2SF: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text
      className={'font-sf_pro text-14px font-regular leading-18px text-center'}
    >
      {children}
    </Text>
  )
}

export const Body3A: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text className={'font-abel text-12px leading-14px text-center'}>
      {children}
    </Text>
  )
}

export const Body3SF: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Text className={'font-sf_pro text-12px leading-14px text-center'}>
      {children}
    </Text>
  )
}
