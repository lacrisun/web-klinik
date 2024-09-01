"use client"

import { Menu, Group, Center, Burger, Container, Anchor, Drawer, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import Image from 'next/image';
import classes from './HeaderMenu.module.css';
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  {
    link: '#lokasi',
    label: 'Lokasi Layanan',
    links: [
      { link: '/Pekanbaru', label: 'Pekanbaru' },
      { link: '/Medan', label: 'Medan' },
      { link: '/Padang', label: 'Padang' },
      { link: '/Batam', label: 'Batam' },
    ],
  },
  { link: '/testimoni', label: 'Testimoni' },
  { link: '/berita', label: 'Berita' },
  {
    link: '#2',
    label: 'Support',
    links: [
      { link: '/faq', label: 'FAQ' },
      { link: '/kontak', label: 'Kontak Kami' },
    ],
  },
];

export function HeaderMenu() {
  const [opened, { open, close }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link href={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  const burgerItems = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <NavLink key={item.link} className={classes.link} href={item.link} label={item.label} />

    ));

    if (menuItems) {
      return (
        <NavLink
          key={link.label}
          href=""
          label={link.label}
          rightSection={<IconChevronDown size="1rem" stroke={1.5} />}
          childrenOffset={28}
          className={classes.navlink}
        >
          {menuItems}
        </NavLink>
      );
    }

    return (
      <Link key={link.label} href={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Link href='/'><Image src='/logo.png' alt='logo' width={100} height={100} style={{ marginBottom: 5 }} /></Link>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Drawer offset={8} position='right' radius="md" opened={opened} onClose={close} title="Menu">
            {burgerItems}
          </Drawer>
          <Burger opened={opened} onClick={open} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}