import { createI18n } from 'vue-i18n'
import en from './locales/en'
import pl from './locales/pl'

// Detect saved locale or use default (English)
const savedLocale = localStorage.getItem('locale')
const defaultLocale = savedLocale || 'en'

const i18n = createI18n({
  legacy: false,
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    en,
    pl
  }
})

export default i18n
