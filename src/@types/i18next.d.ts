import { en } from '@/common/i18n'
import { defaultNS } from '@/common/i18n/i18n'

const resources = {
  en,
} as const

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources
  }
}
