import { TScreens } from '@app/navigation/types'

declare global {
  namespace ReactNavigation {
    type RootParamList = TScreens
  }
}
