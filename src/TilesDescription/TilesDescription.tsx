import Image from 'next/image'
import { Box, Container, Grid, Typography } from '@mui/material'

import BrushedAlumImage from '../../public/images/brushed-alum.png'
import RedBulletIcon from '../../public/icons/bullet-red.svg'
import BulletIcon from '../../public/icons/bullet.svg'

export const TilesDescription = () => {
  return (
    <Box sx={{ py: '6rem' }}>
      <Container>
        <Grid container>
          <Grid item sm={6} sx={{ position: 'relative', mb: '2rem', borderTop: '2px solid #DB3A34' }}>
            <Image src="/images/aim.jpg" layout="fill" objectFit="cover" objectPosition="top" alt="Hero Image" />
          </Grid>
          <Grid item sm={6} sx={{ mb: '2rem', borderTop: '2px solid #DB3A34' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#232323',
                height: '480px',
                padding: '4rem',
              }}
            >
              <img src={RedBulletIcon.src} height="64px" />
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#fff' }}>
                Lorem ipsum dolor sit
              </Typography>
              <Typography variant="subtitle2" sx={{ mt: '1rem', color: '#fff' }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nostrum beatae nobis id! Nisi, facilis.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} sx={{ mt: '2rem' }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                backgroundColor: '#DB3A34',
                borderTop: '2px solid #DB3A34',
                height: '480px',
                padding: '4rem',
              }}
            >
              <img src={BulletIcon.src} height="64px" />
              <Typography variant="h4" sx={{ fontWeight: 600 }}>
                Consectetur adipisicing elit
              </Typography>
              <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.87)', mt: '1rem' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quisquam quaerat doloribus iste nostrum amet reprehenderit
                atque! Optio sequi aperiam labore culpa.
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={6} sx={{ position: 'relative', mt: '2rem', borderTop: '2px solid #DB3A34' }}>
            <Image src="/images/bullet-in-hand.jpg" layout="fill" objectFit="cover" objectPosition="center" alt="Hero Image" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
