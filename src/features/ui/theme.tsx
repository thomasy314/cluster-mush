import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            light: '#F8F6F1',
            main: '#15201D'
        },
        secondary: {
            main: '#8BA465'
        },
    },
    typography: {
        fontFamily: 'fredoka, sans-serif',
        h1: {
            fontFamily: 'eckmannpsych-Small, sans-serif',
            fontSize: 'min(10vw, 4em)',
            color: '#8BA465'
        },
        button: {
            textTransform: 'none',
            fontSize: '1em'
        }
    },
    components: {
        // Name of the component ⚛️
        MuiButton: {
            defaultProps: {
                // The default props to change
                color: 'secondary',
                variant: 'contained',
            },
            styleOverrides: {
                root: {
                    borderWidth: 0
                }
            }
        },
    }
});