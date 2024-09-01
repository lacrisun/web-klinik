'use client'

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Container, Center } from '@mantine/core';
import classes from './CardsCarousel.module.css';
import '@mantine/carousel/styles.css';

interface CardProps {
    image: string;
    title: string;
    category: string;
}

function Card({ image, title, category }: CardProps) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="lg"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`}}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
            <Button variant="white" color="dark">
                Hubungi klinik
            </Button>
        </Paper>
    );
}

const data = [
    {
        image:
            '/pekanbaru.png',
        title: 'Klinik Pratama Primacare Jl. Soebrantas, Pekanbaru',
        category: 'Pekanbaru',
    },
    {
        image:
            '/medan.png',
        title: 'Klinik Pratama Primacare Jl. Multatuli, Medan',
        category: 'Medan',
    },
    {
        image:
            '/padang.png',
        title: 'Klinik Pratama Primacare Jl. Andalas, Padang',
        category: 'Padang',
    },
    {
        image:
            '/batam.png',
        title: 'Klinik Pratama Primacare Jl. Laksamana Bintan, Batam',
        category: 'Batam',
    },
];

export function CardsCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const tablet = useMediaQuery(`(max-width: ${theme.breakpoints.md})`)
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <div className={classes.wrapper} id='lokasi'>
            <Container size='md' className={classes.headtitle}>
                <Center>
                    Kota Layanan
                </Center>
            </Container>
            <Container size='xl'>
                <Carousel
                    slideSize={{ base: '100%', sm: '50%', md: '33.333333%', lg: '25%' }}
                    slideGap={{ base: rem(2), sm: 'xl' }}
                    align="start"
                    slidesToScroll={mobile ? 1 : tablet ? 1 : 1}
                    loop
                >
                    {slides}
                </Carousel>

            </Container>
        </div>


    );
}