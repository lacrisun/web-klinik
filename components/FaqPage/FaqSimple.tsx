'use client'

import { Container, Title, Accordion } from '@mantine/core';
import classes from './FaqSimple.module.css';

export function FaqSimple() {
  return (
    <Container size="md" className={classes.wrapper} id='faq'>
      <Title ta="center" className={classes.title}>
        Pertanyaan yang sering ditanyakan
      </Title>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="lokasi-klinik">
          <Accordion.Control>Dimana saja klinik Primacare berada?</Accordion.Control>
          <Accordion.Panel>Saat ini, klinik Primacare terletak di 4 lokasi berbeda yakni, Kota Pekanbaru, Kota Medan, Kota Batam, dan Kota Padang dengan lokasi-lokasi lainnya akan dibuka di masa mendatang.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="jam-operasional">
          <Accordion.Control>Kapan jam operasional klinik Primacare?</Accordion.Control>
          <Accordion.Panel>Klinik PrimaCare buka setiap hari dari pukul 08.00 hingga 20.00. Kami juga buka pada akhir pekan dan hari libur nasional.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="perjadwalan-janji">
          <Accordion.Control>Bagaimana cara membuat janji temu?</Accordion.Control>
          <Accordion.Panel>Anda dapat membuat janji temu dengan menghubungi kami di nomor telepon (0813-6514-6162) atau melalui formulir online di website kami. Kami akan mengonfirmasi janji temu Anda melalui telepon atau email.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="layanan-kesehatan">
          <Accordion.Control>Layanan apa saja yang tersedia di Klinik Primacare</Accordion.Control>
          <Accordion.Panel>Klinik PrimaCare menyediakan berbagai layanan kesehatan termasuk konsultasi umum, pemeriksaan kesehatan, vaksinasi, tes laboratorium, dan layanan kesehatan keluarga. Kami juga memiliki fasilitas untuk pemeriksaan ultrasonografi dan EKG.</Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="asuransi">
          <Accordion.Control>Apakah Klinik Primacare bisa menerima BPJS atau asuransi lainnya?</Accordion.Control>
          <Accordion.Panel>Ya, Klinik PrimaCare menerima berbagai jenis asuransi kesehatan. Silakan hubungi kami untuk informasi lebih lanjut mengenai asuransi yang kami terima dan prosedur klaim.</Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}