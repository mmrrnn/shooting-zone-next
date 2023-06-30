import { Box, Button, Hidden, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import { Link as ScrollLink } from 'react-scroll'
import { ArrowDownward } from '@mui/icons-material'
import Link from 'next/link'

export const Hero = () => {
  return (
    <Box component="main" sx={{ height: '100vh' }}>
      <Box sx={{ width: '100%', height: '100%' }}>
        <Image src="/images/hero.jpg" layout="fill" objectFit="cover" alt="Hero Image" objectPosition="left" />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
            position: 'absolute',
            backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,0.75) 20%, transparent)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '180px',
            px: '1rem',
            textAlign: 'center',
          }}
        >
          <Hidden mdDown>
            <Typography variant="h1" fontWeight={600} sx={{ letterSpacing: '-4px' }}>
              SHOOTING ZONE
            </Typography>
          </Hidden>
          <Hidden smDown mdUp>
            <Typography variant="h2" component="h1" fontWeight={600} sx={{ letterSpacing: '-4px' }}>
              SHOOTING ZONE
            </Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h3" component="h1" fontWeight={600} sx={{ letterSpacing: '-4px' }}>
              SHOOTING ZONE
            </Typography>
          </Hidden>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.9)' }}>
            Strzelnica sportowo-rekreacyjna w Limanowej
          </Typography>
          <Link href="o-nas">
            <Button variant="contained" color="primary" sx={{ mt: 4 }} size="large">
              Dowiedz się więcej
            </Button>
          </Link>
        </Box>
        <ScrollLink to="anchor" spy smooth duration={500}>
          <IconButton
            size="large"
            sx={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', border: '1px solid white' }}
          >
            <ArrowDownward />
          </IconButton>
        </ScrollLink>
      </Box>
    </Box>
  )
}
