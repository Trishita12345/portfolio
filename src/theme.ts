import { ThemeOptions } from "@mui/material";

export const theme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#41228e',
            dark: '#1B215A',
            light: '#6B57A5',
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#E22A55',
            light: '#FAEDF6'
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: '6px 0px 6px 0px'
                }
            }
        },
    }
}