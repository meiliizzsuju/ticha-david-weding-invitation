import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  // Explicitly define 'params' as a Promise to satisfy the compiler's expectation.
  // This addresses the error: "Type '{ locale: string; }' is missing the
  // following properties from type 'Promise<any>': then, catch, finally, [Symbol.toStringTag]"
  params: Promise<{ locale: string }>;
}) {
  // Await the 'params' Promise to get the resolved locale object.
  // No need for Promise.resolve() wrapper anymore since 'params' is typed as a Promise.
  const resolvedParams = await props.params;
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
