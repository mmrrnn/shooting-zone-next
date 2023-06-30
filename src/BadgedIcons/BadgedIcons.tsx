import { Box, Container, Grid, Typography } from '@mui/material'

import BrushedAlumImage from '../../public/images/brushed-alum.png'
import ScopeIcon from '../../public/icons/scope-red.svg'
import LicenseIcon from '../../public/icons/license-red.svg'
import PistolIcon from '../../public/icons/pistol-red.svg'
import RedBulletIcon from '../../public/icons/bullet-red.svg'

export const BadgedIcons = () => {
  return (
    <Container sx={{ py: '8rem' }} id="anchor">
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <img src={RedBulletIcon.src} height="64px" />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 600,
          }}
          textAlign="center"
        >
          Lorem ipsum dolor
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{
            mt: '2rem',
            maxWidth: '640px',
            lineHeight: '2rem',
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi ab porro doloremque consectetur, hic quod ipsa
          perspiciatis voluptatibus maiores, ex nam? Exercitationem temporibus, porro pariatur facere ut natus perspiciatis soluta, deleniti
          ullam illo at, minus error deserunt. Possimus, sit?
        </Typography>
      </Box>

      <Grid container sx={{ mt: '6rem', spacing: 'rem', alignItems: 'flex-start', justifyContent: 'center' }}>
        <Grid item xs={6} sm sx={{ px: '0.5rem', my: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              border: '1px dashed #DB3A34',
              backgroundColor: '#232323',
              padding: '2rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={LicenseIcon.src} height="32px" width="32px" />
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center', mt: '2rem', fontWeight: 600 }}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: '1rem' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, accusantium?
          </Typography>
        </Grid>
        <Grid item xs={6} sm sx={{ px: '0.5rem', my: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              border: '1px dashed #DB3A34',
              backgroundColor: '#232323',
              padding: '2rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={PistolIcon.src} height="32px" width="32px" />
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center', mt: '2rem', fontWeight: 600 }}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Grid>
        <Grid item xs={6} sm sx={{ px: '0.5rem', my: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Box
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              border: '1px dashed #DB3A34',
              backgroundColor: '#232323',
              padding: '2rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={ScopeIcon.src} height="32px" width="32px" />
          </Box>
          <Typography variant="h6" sx={{ textAlign: 'center', mt: '2rem', fontWeight: 600 }}>
            Lorem ipsum dolor
          </Typography>
          <Typography variant="subtitle2" sx={{ textAlign: 'center', mt: '1rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloremque nesciunt neque.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
