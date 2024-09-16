"use client"

import { Text, Container, ActionIcon, Group, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './FooterLinks.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const data = [
  {
    title: 'About',
    links: [
      { label: 'Lokasi Layanan', link: '#lokasi', text: '' },
      { label: 'Testimoni', link: '#testimoni', text: '' },
      { label: 'FAQ', link: '#faq', text: '' },
    ],
  },
  {
    title: 'Kontak',
    links: [
      { label: 'Telepon', link: '', text: '+62813 - 6514 - 6162' },
      { label: 'Email', link: '', text: 'klinikprimacare@gmail.com' },
      { label: 'Lokasi', link: '', text: 'Jl. Nangka No.313a, Kp. Melayu, Kec. Sukajadi, Kota Pekanbaru, Riau 28128' },
    ],
  },
];

export function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      group.title === 'Kontak' ? (
        <Text
          key={index}
          className={classes.link}
        >
          <FontAwesomeIcon icon={link.label === 'Telepon' ? faPhone : link.label === 'Email' ? faEnvelope : faLocationDot} style={{marginRight: 5}}/>
          {link.text}
        </Text>
      ) : (
        <Link key={index} href={link.link}>
          <Text
            key={index}
            className={classes.link}
          >
            {link.label}
          </Text>
        </Link>
      )
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src='/logo.png' alt='logo' width={100} height={100} style={{ marginBottom: 5 }} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Membina keluarga sehat Indonesia sejak tahun 2006.
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 Gusti Panji Widodo. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}