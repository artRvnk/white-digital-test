import {
  NavigatorScreenParams,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native'

import type { TProfileStack } from './stacks'
import type {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack'

export type TScreens = TProfileStack

export type TScreenProps<Screen extends keyof TScreens> =
  NativeStackScreenProps<TScreens, Screen>

export type TScreenQueryProps<Screen extends keyof TScreens> = RouteProp<
  TScreens,
  Screen
>

export type TScreenNavigation<Screen extends keyof TScreens> =
  NativeStackNavigationProp<TScreens, Screen>

export type TNavigatorScreenParams<
  TStack extends ParamListBase,
  TStackParams = undefined,
> = NavigatorScreenParams<TStack> | TStackParams
