import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#15201D'
        },
        secondary: {
            main: '#8BA465'
        }
    },
    components: {
        // Name of the component ⚛️
        MuiButton: {
            defaultProps: {
                // The default props to change
                color: 'primary',
                variant: 'outlined',
            },
            styleOverrides: {
                root: {
                    borderWidth: 0
                }
            }
        },
    }
});