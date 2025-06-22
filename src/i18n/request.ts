import { getRequestConfig } from "next-intl/server";

const DEFAULT_LOCALE = 'en'; // keep this consistent with next.config.ts

export default getRequestConfig(async ({ locale }) => {
  // fallback to 'en' if locale is undefined
  const usedLocale = locale ?? 'en';
  console.log("check this locale >>>>", usedLocale)

  return {
    locale: usedLocale,
    messages: (await import(`../messages/${usedLocale}.json`)).default,
  };
});
