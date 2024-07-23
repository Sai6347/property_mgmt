import { createTheme } from "@mui/material";


declare module '@mui/material/styles' {

}

interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    highEmphasis: string;
    mediumEmphasis: string;
    lowEmphasis: string;
  }

  interface Palette{
    text: TypeText
  }

const theme = createTheme({
    palette: {
        primary: {
            main: '#6C5DD3',
            light: '#B4A9FF',
            dark: '#393552',
            contrastText: '#E8E8E9',
        },
        text: {
            primary: '#fff',
            secondary: '#f22',
            disabled: '#000',
          },
          background: {
            paper: '#fff',
            default: '#19181C',
          },
        },
    typography: {
        fontFamily: '"Gilroy", "Helvetica", "Arial", sans-serif',

        h1: {
            fontSize: '36px',
            fontWeight: 700,
            lineHeight: '42px',
            letterSpacing: '-0.015em',
        },

        h2: {
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '29.4px',
            letterSpacing: '-0.005em',
        },

        h3: {
            fontSize: '18px',
            fontWeight: 500,
            lineHeight: '27px',
        },

        body1: {
            fontSize: '16px',
            fontWeight: 500,
            lineHeight: '22.4px',
        },

        body2: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '17.15px',
            letterSpacing: '0.01em',
        },

        caption: {
            fontSize: '12px',
            fontWeight: 500,
            lineHeight: '14.56px',
            letterSpacing: '0.02em',
        },

        button: {
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '19px',
            textTransform: 'none' as const,
        },
     },
     components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '16px',
              lineHeight: '19px',
              textAlign: 'center',
              borderRadius: '12px',
              color: "#ffff",
              '&.Mui-disabled': {
                backgroundColor: "#6C5DD3",
                color: "#ffff",
                opacity: 0.56,
              },
            },
            sizeSmall: {
              padding: '6px 12px',
            },
            sizeLarge: {
              padding: '20px 40px',
            },
            containedPrimary: {
              backgroundColor: "#6C5DD3",
              padding: '12px 24px',
            },
            outlined: {
              borderColor: "#B4A9FF",
              color: '#C9C8CC',
              padding: '12px 24px',
            },
            text: {
              color: '#B4A9FF',
              padding: '4px 12px',
              fontWeight: '600',
            },
          },
        },
    }
});

export default theme;