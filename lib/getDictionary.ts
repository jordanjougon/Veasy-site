import "server-only";

const dictionaries = {
  fr: () =>
    import("../dictionaries/fr.json").then((m) => m.default),
  "pt-BR": () =>
    import("../dictionaries/pt-BR.json").then((m) => m.default),
  en: () =>
    import("../dictionaries/en.json").then((m) => m.default),
};

export type Locale = keyof typeof dictionaries;

export const supportedLocales: Locale[] = ["pt-BR", "fr", "en"];

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = async (locale: string) => {
  const loader =
    dictionaries[locale as Locale] ?? dictionaries["pt-BR"];
  return loader();
};
