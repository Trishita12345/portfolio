import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";
import { theme } from "../../theme";
import { MdDrafts } from "react-icons/md";
import { FaBuilding } from "react-icons/fa"
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { images } from "../../Assets/images";

const ContactUs = () => {
    const theme = useTheme();
    const screenSizeDown800 = useMediaQuery(theme.breakpoints.down(800))
    const screenSizeUplg = useMediaQuery(theme.breakpoints.up('lg'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'contactUs' })

    return (
        <Grid container px={screenSizeDown800 ? screenSizeDown800 ? 5 : 10 : 15} py={5} spacing={8} justifyContent={'center'}>
            <Grid item xs={12} lg={6} color={theme.palette.primary.dark}>
                <LeftSection />
            </Grid>
            <Grid item xs={12} lg={6}>
                <RightSection />
            </Grid>
        </Grid >
    )
}

export default ContactUs;