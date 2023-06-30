import Head from 'next/head'
import { Container, Divider, Stack, Button } from '@mui/material'

import BrushedAlumImage from '../public/images/brushed-alum.png'
import GunAimingImage from '../public/images/gun-aiming.jpg'
import DrawerAppBar from '@components/AppBar/AppBar'
import Footer from '@components/Footer/Footer'
import { Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { PageHero } from '@components/PageHero/PageHero'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>O nas - Shooting Zone Limanowa</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <main>
        <DrawerAppBar />
        <PageHero>O NAS</PageHero>
        <Container sx={{ my: '12rem' }}>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={5} sx={{ my: '2rem ' }}>
              <Typography variant="h3" fontWeight={800}>
                Lorem ipsum dolor sit amet cons
              </Typography>
            </Grid>
            <Grid item xs={12} md={7} sx={{ borderLeft: '1px solid #DB3A34', paddingLeft: '2rem', my: '2rem' }}>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore iure quam, sint deserunt corrupti officiis deleniti tempore
                vitae et eaque. Distinctio cum exercitationem quo itaque!
              </Typography>
            </Grid>
          </Grid>
          <Grid container justifyContent="space-between" sx={{ mt: '10rem' }} spacing="2rem">
            <Grid item xs={6} sm={4}>
              <Typography variant="h3" color="primary" fontWeight={800}>
                10
              </Typography>
              <Typography variant="body1" color="body2" fontWeight={800}>
                stanowisk strzeleckich
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="h3" color="primary" fontWeight={800}>
                9
              </Typography>
              <Typography variant="body1" color="body2" fontWeight={800}>
                rodzajów broni
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography variant="h3" color="primary" fontWeight={800}>
                100 m
              </Typography>
              <Typography variant="body1" color="body2" fontWeight={800}>
                maksymalny dystans
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Grid container>
          <Grid item xs={12} md={6} sx={{ height: '640px', backgroundColor: 'rgb(28, 28, 28)' }}>
            <Stack sx={{ width: '100%', height: '100%', p: '10%' }} justifyContent="center">
              <Typography variant="subtitle1" fontWeight={800} sx={{ letterSpacing: '0.9px' }}>
                LOREM IPSUM DOLOR
              </Typography>
              <Typography variant="h4" fontWeight={800} sx={{ fontSize: '40px', my: '20px' }}>
                Lorem ipsum dolor
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: '30px' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus, omnis veritatis laborum ab, pariatur itaque
                quas odit obcaecati eos id quia! Corrupti tempora odio.
              </Typography>
              <Link href="/oferta">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    width: 'fit-content',
                    mt: '40px',
                  }}
                >
                  Sprawdź ofertę
                </Button>
              </Link>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6} sx={{ position: 'relative', height: '640px', backgroundColor: 'rgb(28, 28, 28)' }}>
            <Image src={GunAimingImage} layout="fill" objectFit="cover" />
          </Grid>
        </Grid>

        {/* <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          gap="8rem"
          sx={{
            my: '8rem',
            //  backgroundImage: `url(${BrushedAlumImage.src})`, backgroundColor: 'white'
          }}
        >
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#DB3A34',
                position: 'absolute',
                height: 'calc(100% - 48px)',
                width: 'calc(100% - 48px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: '#fff', position: 'absolute', height: 'calc(100% - 48px)', width: 'calc(100% - 48px)' }}></Box>
          </Grid>
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#fff',
                position: 'absolute',
                height: 'calc(100% - 48px)',
                width: 'calc(100% - 48px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: '#DB3A34', position: 'absolute', height: 'calc(100% - 48px)', width: 'calc(100% - 48px)' }}></Box>
          </Grid>{' '}
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#DB3A34',
                position: 'absolute',
                height: 'calc(100% - 48px)',
                width: 'calc(100% - 48px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: '#fff', position: 'absolute', height: 'calc(100% - 48px)', width: 'calc(100% - 48px)' }}></Box>
          </Grid>
        </Grid> */}
        <Footer />
      </main>
    </div>
  )
}
