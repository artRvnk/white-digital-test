import { Dispatch, SetStateAction } from 'react'

import { ELanguage } from '@/common/i18n'

export type TLanguageProvider = {
  language: ELanguage
  setLanguage: Dispatch<SetStateAction<ELanguage>>
}
