import { createTheme } from '@mui/material/styles'

export const themeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#DB3A34',
    },
    background: {
      default: '#202020',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins400.ttf') format('truetype');
          font-weight: 400;
          font-style: normal;
        }
  
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins500.ttf') format('truetype');
          font-weight: 500;
          font-style: normal;
        }
  
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins600.ttf') format('truetype');
          font-weight: 600;
          font-style: normal;
        }
  
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins700.ttf') format('truetype');
          font-weight: 700;
          font-style: normal;
        }
  
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins800-bold.ttf') format('truetype');
          font-weight: 800;
          font-style: bold;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'linear-gradient(180deg,rgba(0,0,0,0.9) 0%,transparent)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          lineHeight: '135%',
          letterSpacing: '0.01em',
          fontWeight: 500,
          fontSize: '1.125rem',
          padding: '16px 40px',
          borderRadius: '32px',
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: 'rgba(255, 255, 255, 0.7)!important',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '16px',
            // color: 'rgb(92, 92, 92)',
          },
          '& .Mui-focused fieldset': {
            borderColor: 'rgba(255, 255, 255, 0.7)!important',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '0 auto',
          display: 'block!important',
        },
      },
    },
  },
})
