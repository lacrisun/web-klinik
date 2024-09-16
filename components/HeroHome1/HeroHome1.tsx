

import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import Link from 'next/link';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Membina Keluarga Sehat sejak{' '}
          <Text component="span" inherit className={classes.highlight}>
            2006
          </Text>
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
          Mulai perjalanan Anda menuju kesehatan keluarga yang lebih baik hari ini!
          </Text>
        </Container>

        <div className={classes.controls}>
          <Link href='#lokasi'><Button className={classes.control} variant="white" size="lg">
            Cek Klinik Terdekat
          </Button></Link>
        </div>
      </div>
    </div>
  );
}