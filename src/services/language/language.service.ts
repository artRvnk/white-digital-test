import { NativeModules, Platform } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import i18next from 'i18next'

import { ELanguage } from '@/common/i18n'

export class Language {
  private static KEY = 'language'
  private static storage = AsyncStorage

  public static DEFAULT_LANGUAGE = ELanguage.en

  // get device language
  private static getDeviceLang() {
    const appLanguage =
      Platform.OS === 'ios'
        ? NativeModules['SettingsManager'].settings.AppleLocale ||
          NativeModules['SettingsManager'].settings.AppleLanguages[0]
        : NativeModules['I18nManager'].localeIdentifier

    return appLanguage.slice(0, 2)
  }

  private static async getLocalStorageLanguage() {
    return this.storage.getItem(this.KEY)
  }

  // get app language
  static async getLanguage(): Promise<ELanguage> {
    const localLanguage = await this.getLocalStorageLanguage()

    // if local storage lang set
    if (localLanguage) {
      return localLanguage as ELanguage
    }

    const deviceLang = this.getDeviceLang()

    // if device lang exist
    if (Object.values(Language).includes(deviceLang)) {
      this.setLanguage(deviceLang)
      return deviceLang
    }

    return this.DEFAULT_LANGUAGE
  }

  // set lang
  static async setLanguage(lang: ELanguage) {
    i18next.changeLanguage(lang)

    return this.storage.setItem(this.KEY, lang)
  }
}
