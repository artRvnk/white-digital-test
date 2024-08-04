import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

import { theme } from './config'
import { Navigation } from './ref'
import { ProfileStack } from './stacks'

export const Navigator = () => {
  return (
    <NavigationContainer ref={Navigation.ref} theme={theme}>
      <ProfileStack />
    </NavigationContainer>
  )
}
