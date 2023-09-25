import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";
import { theme } from "../../../theme";
import { MdDrafts } from "react-icons/md";
import { FaBuilding } from "react-icons/fa"
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { images } from "../../../Assets/images";
import { useEffect } from "react";

const ContactUs = () => {
    const theme = useTheme();
    const screenSizeDown800 = useMediaQuery(theme.breakpoints.down(800))
    const [t] = useTranslation('common', { keyPrefix: 'contactUs' })
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])
    return (
        <Grid id='contactUs' position={"relative"}
            container px={screenSizeDown800 ? screenSizeDown800 ? 5 : 10 : 15} my={6} spacing={8} justifyContent={'center'}>
            <img src={images.SideImg} style={{ position: "absolute", right: 0, top: '30%', zIndex: -1, width: "200px", opacity: 0.8 }} />
            <Grid item xs={12} lg={6} color={theme.palette.primary.dark}>
                <LeftSection />
            </Grid>
            <Grid item xs={12} lg={6} bgcolor={"white"}>
                <RightSection />
            </Grid>
        </Grid >
    )
}

export default ContactUs;