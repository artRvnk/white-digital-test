import { EScreens } from '@/navigation/screens'

import { TActivityStackMainParams } from '@/screens/Activity/Main'
import { TActivityStackSingleParams } from '@/screens/Activity/Single'

export type TProfileStack = {
  [EScreens.ActivityMain]: TActivityStackMainParams
  [EScreens.ActivitySingle]: TActivityStackSingleParams
}
