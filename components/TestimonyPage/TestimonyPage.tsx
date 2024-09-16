'use client'

import { Paper, Text, Title, Button, useMantineTheme, rem, Container, Center, Grid } from '@mantine/core';
import classes from './TestimonyPage.module.css';
import { useMediaQuery } from '@mantine/hooks';

export function TestimonyPage() {
    const mobile = useMediaQuery('(max-width: 768px)');


    return (
        <div id='testimoni'>
            <Container size='md' className={classes.headtitle}>
                <Center>
                    Testimoni Kami
                </Center>
            </Container>
            <Container size='lg'>
                <Center>
                    <Grid w="100%" className={classes.gridcol}>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Paper shadow="lg" p="xl" className={classes.paper}>
                                <Text className={classes.papertitle}>Adrian Mafhul</Text>
                                <Text>
                                "Saya sangat puas dengan pelayanan di Primacare Clinic. Dokter dan staffnya sangat ramah dan profesional. Saya merasa nyaman dan percaya diri saat melakukan perawatan di sini."
                                </Text>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Paper shadow="lg" p="xl" className={classes.paper}>
                                <Text className={classes.papertitle}>Sandra Septiana</Text>
                                <Text>
                                "Primacare Clinic adalah tempat yang tepat untuk melakukan perawatan kesehatan. Fasilitasnya lengkap dan modern, serta dokternya sangat berpengalaman. Saya sangat merekomendasikan tempat ini kepada teman-teman saya."
                                </Text>
                            </Paper>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
                            <Paper shadow="lg" p="xl" className={classes.paper}>
                                <Text className={classes.papertitle}>Dwi Kurniawan</Text>
                                <Text>
                                "Saya merasa sangat lega setelah melakukan perawatan di Primacare Clinic. Dokternya sangat sabar dan menjelaskan semua proses perawatan dengan baik. Saya sangat puas dengan hasilnya dan akan kembali lagi jika membutuhkan perawatan lainnya."
                                </Text>
                            </Paper>
                        </Grid.Col>
                    </Grid>
                </Center>
            </Container>
        </div>

    )


}