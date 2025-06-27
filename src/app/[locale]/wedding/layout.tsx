import { Geist, Geist_Mono } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function WeddingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </main>

    </>
  );
}