import Head from 'next/head'
import { Container, Divider, Stack, Button, Input, TextField, styled } from '@mui/material'

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

const MapFrame = styled('iframe')`
  border: none;
  height: 820px;
  width: 100%;
`

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>O nas - Shooting Zone Limanowa</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <main>
        <DrawerAppBar />
        <PageHero>KONTAKT</PageHero>
        <Container sx={{ my: '8rem' }}>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Stack sx={{ height: '100%', py: '4rem' }} justifyContent="center" spacing="3rem">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <img src={phoneIcon.src} height="48px" />
                  <Typography variant="h5">+48 509 674 002</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <img src={mailIcon.src} height="48px" />
                  <Typography variant="h5">kontakt@shootingzone.pl</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <img src={pinIcon.src} height="48px" />
                  <Box>
                    <Typography variant="h5" mb={1}>
                      ul. Michała Dudka 14
                    </Typography>
                    <Typography variant="subtitle2" color="rgba(255, 255, 255, 0.8)">
                      34-600 Limanowa
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack component="form" spacing="24px">
                <Typography variant="h4" fontWeight={800} sx={{ mb: '16px' }}>
                  Napisz do nas
                </Typography>
                <TextField label="Imię i nazwisko" placeholder="Imię" fullWidth />
                <TextField label="Telefon kontaktowy" fullWidth />
                <TextField multiline minRows={4} label="Treść wiadomości" fullWidth />
                <Button variant="contained">Wyślij</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <MapFrame
          className="embed-responsive-item"
          src="https://maps.google.com/maps?q=Strzelnica%20shooting%20zone%20,Limanowa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allow="encrypted-media"
        />
        <Footer />
      </main>
    </div>
  )
}
