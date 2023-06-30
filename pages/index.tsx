import Head from 'next/head'
import DrawerAppBar from '@components/AppBar/AppBar'

import Hero from 'src/Hero'
import BadgedIcons from 'src/BadgedIcons'
import Footer from '@components/Footer/Footer'
import TilesDescription from 'src/TilesDescription'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Shooting Zone Limanowa</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <main>
        <DrawerAppBar />
        <Hero />
        <BadgedIcons />
        <TilesDescription />

        {/* <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }} gap={2}>
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#DB3A34',
                position: 'absolute',
                height: 'calc(100% - 24px)',
                width: 'calc(100% - 24px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: 'white', position: 'absolute', height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' }}></Box>
          </Grid>
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#DB3A34',
                position: 'absolute',
                height: 'calc(100% - 24px)',
                width: 'calc(100% - 24px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: 'white', position: 'absolute', height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' }}></Box>
          </Grid>{' '}
          <Grid item xs={4} sx={{ position: 'relative', height: '480px' }}>
            <Box
              sx={{
                backgroundColor: '#DB3A34',
                position: 'absolute',
                height: 'calc(100% - 24px)',
                width: 'calc(100% - 24px)',
                right: 0,
                bottom: 0,
              }}
            ></Box>
            <Box sx={{ backgroundColor: 'white', position: 'absolute', height: 'calc(100% - 24px)', width: 'calc(100% - 24px)' }}></Box>
          </Grid>
        </Grid> */}
        <Footer />
      </main>
    </div>
  )
}
