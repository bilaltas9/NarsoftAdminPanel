import language from '@iso/config/language.config';

import englishLang from '@iso/assets/images/flag/uk.svg';
import spanishLang from '@iso/assets/images/flag/spain.svg';
import turkishLang from '@iso/assets/images/flag/tr.svg';

const config = {
  defaultLanguage: language,
  options: [
    {
      languageId: 'english',
      locale: 'en',
      text: 'English',
      icon: englishLang,
    },
    {
      languageId: 'spanish',
      locale: 'es',
      text: 'Spanish',
      icon: spanishLang,
    },
    {
      languageId: 'turkish',
      locale: 'tr',
      text: 'Turkish',
      icon: turkishLang,
    }
  ],
};

export function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
export default config;
