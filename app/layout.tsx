import type { Metadata } from "next";
import { Readex_Pro } from 'next/font/google';
import '../styles/global.scss';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Lancashire MX-5 Owners",
  description: "A group based in Lancashire for everything related to the MX-5 Sports car",
};

const readexPro = Readex_Pro({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={readexPro.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
