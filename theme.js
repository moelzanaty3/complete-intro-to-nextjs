import { roboto } from '@theme-ui/presets'

const theme = {
  ...roboto,
  // colors: {
  //   ...roboto.colors,
  //   background: 'yellow',
  // },
  containers: {
    card: {
      boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
      border: '1px solid',
      borderColor: 'muted',
      borderRadius: '4px',
      p: 2,
    },
    page: {
      width: '100%',
      maxWidth: '960px',
      m: 0,
      mx: 'auto',
    },
    header: {
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      variant: 'containers.page',
      height: '100%',
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 4,
      cursor: 'pointer',
    },
    navLink: {
      color: 'text',
      fontSize: 3,
      cursor: 'pointer',
    },
    button: {
      mt: 10,
      display: 'block',
      p: 2,
      borderRadius: 10,
      border: 'none',
      cursor: 'pointer',
      color: 'background',
      bg: 'primary',
      '&:hover': {
        bg: 'text',
      },
    },
  },
  styles: {
    ...roboto.styles,
  },
}

export default theme
