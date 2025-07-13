import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Geist, Geist_Mono } from 'next/font/google';
// Import all desired Google Fonts from next/font/google
import { Noto_Sans_Thai, Libre_Baskerville, Gothic_A1, Noto_Serif } from 'next/font/google';
import '../globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

// Configure Noto Sans Thai font
const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai'], // Specify the subset for Thai characters
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-thai', // Define a CSS variable for Noto Sans Thai
  display: 'swap', // Recommended for font loading performance
});

// Configure Libre Baskerville font
const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'], // Include only the weights you are using
  style: ['normal', 'italic'], // Include styles you are using
  variable: '--font-libre-baskerville', // Define a CSS variable for Libre Baskerville
  display: 'swap', // Recommended for font loading performance
});

// Configure Gothic A1 font (if you intend to use it, otherwise you can remove it)
const gothicA1 = Gothic_A1({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-gothic-a1', // Define a CSS variable for Gothic A1
  display: 'swap', // Recommended for font loading performance
});

type SupportedLocale = 'th' | 'kr' | 'en';

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await props.params;
  const locale = resolvedParams.locale;

  const messages = await getMessages({ locale });

  // Collect all font variables into a single string.
  // This makes sure all fonts loaded via next/font are available as CSS variables
  // on the body element, allowing your CSS rules to pick them up.
  const allFontVariables = [
    geistSans.variable,
    geistMono.variable,
    notoSansThai.variable,
    libreBaskerville.variable,
    gothicA1.variable,
  ].join(' ');

  const localeClassMap: Record<SupportedLocale, string> = {
    th: 'lang-th',
    kr: 'lang-kr',
    en: '', // Optional: define empty if no special class
  };

  const bodyClassName = `${allFontVariables} ${localeClassMap[locale as SupportedLocale]}`;

  return (
    <html lang={locale}>
      {/* Apply all font variables and the conditional 'lang-th' class to the body */}
      <body className={bodyClassName}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
