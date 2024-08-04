import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { EColors } from '@/common/styles'

import { ActivityScreens } from '@/screens/Activity'

import { EScreens } from '../../screens'
import { ScreenNavigationOptions } from '../options'

import { TProfileStack } from './types'

const Stack = createStackNavigator<TProfileStack>()

export const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={EScreens.ActivityMain}
      screenOptions={{
        ...ScreenNavigationOptions,
        cardStyle: {
          backgroundColor: EColors.white,
        },
      }}
    >
      <Stack.Screen
        component={ActivityScreens.Main}
        name={EScreens.ActivityMain}
      />

      <Stack.Screen
        component={ActivityScreens.Single}
        name={EScreens.ActivitySingle}
      />
    </Stack.Navigator>
  )
}
