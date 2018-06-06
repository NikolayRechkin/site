import i18next from 'i18next';
import en from './languages/en.json'
import ru from './languages/ru.json'

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'ru', 
    resources: {
      en: {
        translation: en
      },
      ru: {
        translation: ru
      },
    },
  })

export default i18next