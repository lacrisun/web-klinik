import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../theme';

export const metadata = {
  title: 'Klinik Pekanbaru',
  description: 'Membina keluarga sehat sejak 2006',
};

export default function Layout({ children }: { children: any }) {
  return (
    <section>{children}</section>
  );
}
