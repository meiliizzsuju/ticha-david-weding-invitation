import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'th', 'kr'],

  // Used when no locale matches
  defaultLocale: 'en', // default locale

});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/',
    '/(th|en)/:path*', // Match all routes that have a locale prefix
    '/((?!_next|_vercel|.*\\..*).*)', // Match all other routes that don't start with _next or _vercel, and don't contain a dot
  ],
};