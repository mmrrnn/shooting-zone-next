import Head from 'next/head'
import {
  Container,
  Divider,
  Stack,
  Button,
  Input,
  TextField,
  styled,
  Card,
  CardContent,
  CardMedia,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import Slider from 'react-slick'

import BrushedAlumImage from '../public/images/brushed-alum.png'
import GunAimingImage from '../public/images/gun-aiming.jpg'
import DrawerAppBar from '@components/AppBar/AppBar'
import Footer from '@components/Footer/Footer'
import { Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { PageHero } from '@components/PageHero/PageHero'
import Link from 'next/link'

import phoneIcon from '../public/icons/phone.svg'
import mailIcon from '../public/icons/mail.svg'
import pinIcon from '../public/icons/pin.svg'

export default function Oferta() {
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.down('md'))
  const isMd = useMediaQuery(theme.breakpoints.up('md') && theme.breakpoints.down('lg'))

  var settings = {
    dots: true,
    arrows: !isSm && !isMd,
    infinite: true,
    speed: 500,
    slidesToShow: isSm ? 1 : isMd ? 2 : 3,
    slidesToScroll: isSm ? 1 : isMd ? 2 : 3,
  }
  return (
    <div className="container">
      <Head>
        <title>Oferta - Shooting Zone Limanowa</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <main>
        <DrawerAppBar />
        <PageHero>OFERTA</PageHero>
        <Container sx={{ my: '8rem' }}>
          <Slider {...settings}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <Card sx={{ maxWidth: 345, mx: 'auto', display: 'block' }} key={item}>
                <CardMedia sx={{ height: '480px', position: 'relative' }}>
                  <Image src="/images/small-gun.jpeg" layout="fill" />
                </CardMedia>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lorem ipsum {item}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Slider>
        </Container>
        <Footer />
      </main>
    </div>
  )
}
