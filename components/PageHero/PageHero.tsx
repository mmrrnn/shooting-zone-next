import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const PageHero: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Box sx={{ height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <Image src="/images/gun-shoot.jpg" layout="fill" objectFit="cover" alt="hero" />
      <Typography variant="h2" sx={{ fontWeight: 600, zIndex: 2, textTransform: 'uppercase' }}>
        {children}
      </Typography>
    </Box>
  )
}
