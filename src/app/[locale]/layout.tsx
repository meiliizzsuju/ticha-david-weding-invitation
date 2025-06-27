import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  // The 'params' object is expected to have a 'locale' property.
  // In some Next.js environments or versions, particularly with dynamic routes
  // in async components, Next.js might expect 'params' itself to be awaited.
  // The type definition remains the same, but the runtime access is adjusted.
  params: { locale: string };
}) {
  // Explicitly await 'props.params' to satisfy the Next.js error message:
  // "params should be awaited before using its properties."
  // Promise.resolve() is used to safely await 'params' whether it's
  // already a resolved object or a Promise-like object.
  const resolvedParams = (await Promise.resolve(props.params)) as { locale: string };
  const locale = resolvedParams.locale;

  // Fetch messages based on the resolved locale. This part remains the same.
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/*
          NextIntlClientProvider makes the messages available to client components.
          It uses the locale and messages fetched on the server.
        */}
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
