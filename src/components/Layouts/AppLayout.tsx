import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';

interface AppLayoutProps {
  children: React.ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}

export default function AppLayout({ children, messages, locale }: AppLayoutProps) {
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
