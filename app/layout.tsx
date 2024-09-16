import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import { Red_Hat_Display } from 'next/font/google';

export const metadata = {
  title: 'Home - Primacare',
  description: 'Membina keluarga sehat sejak 2006',
};

const RedHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={RedHatDisplay.className}>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
