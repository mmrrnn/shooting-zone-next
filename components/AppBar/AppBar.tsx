import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  Hidden,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import * as React from 'react'
import Link from 'next/link'

import { sluggify } from 'src/utils'

const drawerWidth = 240
const navItems = ['O nas', 'Oferta', 'Bon podarunkowy', 'Kontakt']

export default function DrawerAppBar() {
  const [container, setContainer] = React.useState<(() => HTMLElement) | null>(null)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SHOOTING ZONE
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={sluggify(item)} disablePadding>
            <Link href={sluggify(item)}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  React.useEffect(() => {
    setContainer(Boolean(window) ? () => window.document.body : null)
  }, [])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color="transparent" sx={{ py: 2 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link href="/">
            <Typography variant="h6" component="div" sx={{ display: 'block', cursor: 'pointer', letterSpacing: '0px' }}>
              SHOOTING ZONE
            </Typography>
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <React.Fragment  key={sluggify(item)}>
                <Hidden mdDown>
                  <Link href={sluggify(item)}>
                    <Button
                      sx={{ color: '#fff', mx: 1, fontSize: '14px', letterSpacing: '0.01rem', '&:hover': { backgroundColor: '#DB3A34' } }}
                    >
                      {item}
                    </Button>
                  </Link>
                </Hidden>
                <Hidden mdUp>
                  <Link href={sluggify(item)}>
                    <Button
                      size="small"
                      sx={{
                        color: '#fff',
                        mx: 0.5,
                        fontSize: '13px',
                        letterSpacing: '0.01rem',
                        px: '14px',
                        '&:hover': { backgroundColor: '#DB3A34' },
                      }}
                    >
                      {item}
                    </Button>
                  </Link>
                </Hidden>
              </React.Fragment>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
