export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'fr',
    legacy: false,
    messages: {
      fr: {
        hello: 'bonjour',
      },
      en: {
        hello: 'hello',
      },
    },
  };
});
