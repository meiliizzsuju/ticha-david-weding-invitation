import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // You can enhance this to detect cookie, browser, or pathname later
  const locale = 'en'; // or detect from cookies, headers, etc.

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
