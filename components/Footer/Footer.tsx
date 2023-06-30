import { Facebook, Instagram } from '@mui/icons-material'
import { Box, Container, IconButton, Link, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: '4rem' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <IconButton size="large">
          <Facebook fontSize="large" sx={{ color: '#F2F2F4' }} />
        </IconButton>
        <IconButton size="large">
          <Instagram fontSize="large" sx={{ color: '#F2F2F4' }} />
        </IconButton>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ color: '#F2F2F4', fontWeight: 'bold', textAlign: 'center', mt: '1rem', mb: '0.5rem' }}>
          SHOOTING ZONE
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#5D5D5F', textAlign: 'center' }}>
          ul. Michała Dudka 14, 34-600 Limanowa
        </Typography>
        <Typography variant="subtitle1" sx={{ color: '#5D5D5F', textAlign: 'center' }}>
          +48 509 674 002
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', mt: '2rem', flexWrap: 'wrap' }}>
        <Link sx={{ color: '#5D5D5F', textDecorationColor: '#5D5D5F', fontSize: '14px' }} href="#">
          Strona główna
        </Link>
        <Link sx={{ color: '#5D5D5F', textDecorationColor: '#5D5D5F', fontSize: '14px' }} href="#">
          O nas
        </Link>
        <Link sx={{ color: '#5D5D5F', textDecorationColor: '#5D5D5F', fontSize: '14px' }} href="#">
          Oferta
        </Link>
        <Link sx={{ color: '#5D5D5F', textDecorationColor: '#5D5D5F', fontSize: '14px' }} href="#">
          Bon podarunkowy
        </Link>
        <Link sx={{ color: '#5D5D5F', textDecorationColor: '#5D5D5F', fontSize: '14px' }} href="#">
          Kontakt
        </Link>
      </Box>
    </Container>
  )
}
