import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { images } from "../Assets/images";
import { useTranslation } from "react-i18next";
import { LogoComponent } from "./Header";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const [t] = useTranslation('common', { keyPrefix: 'home' })
    const navigate = useNavigate();
    const theme = useTheme();
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))

    return <Box height={screenSizeDownSm ? "700px" : "500px"} position={"relative"}>
        <Box zIndex={10} position={"absolute"} height={screenSizeDownSm ? "400px" : "300px"} width={"80vw"} bottom={"30%"} left={"10vw"} bgcolor={"#f3f7ff"}>
            <Box position={"relative"} width={"100%"} height={"100%"} >

                <img src={images.SideImg} style={{ position: "absolute", width: "150px", opacity: 0.8, zIndex: -1 }} />
                <Grid container alignItems={"center"} height={"100%"} columnSpacing={10} justifyContent={"space-around"} >
                    <Grid item xs={10} md={7}>
                        <Typography variant="h4" fontWeight={"bold"} color={theme.palette.primary.dark}>If You Have Any Question Feel Free To Call <Typography variant="h4" fontWeight={"bold"} display={"inline-block"} color={theme.palette.primary.main}>+91-80169-70670</Typography></Typography>
                        <Typography mt={8} fontSize={"12px"}>It is a long established fact that <Typography fontWeight={"bold"} fontSize={"12px"} display={"inline-block"} color={theme.palette.primary.main}>psubhajit14@gmail.com</Typography> content of a page.</Typography>
                    </Grid>
                    <Grid item xs={10} md={3}>
                        <Button color='secondary' size="large" sx={{ textTransform: 'capitalize' }} variant='contained'
                            onClick={() => navigate('/contact-us')}
                        >{t('getInTouchText')}</Button>
                    </Grid>
                </Grid>
            </Box>

        </Box>
        <Box height={"50%"}>

        </Box>
        <Box position={"relative"} height={"50%"} bottom={0} sx={{ backgroundImage: `url(${images.BackgroundImage})` }}>
            <Grid container position={"absolute"} bottom={0} my={3} alignItems={"center"} justifyContent={"space-between"}>
                <Grid item xs={12} md={5}>
                    <LogoComponent />
                </Grid>
                <Grid item container xs={12} md={5} columnGap={3} justifyContent={"center"} mt={2} sx={{
                    color: '#FFFFFF',
                    opacity: 0.4,
                    cursor: 'pointer'
                }}>
                    <Typography onClick={() => navigate("/")}>Home</Typography>
                    <Typography onClick={() => navigate("/about")}>About</Typography>
                    <Typography onClick={() => navigate("/contact-us")}>Contact</Typography>
                </Grid>
                <Typography mt={3} mb={1} width={"100vw"} textAlign={"center"} sx={{
                    color: '#FFFFFF',
                    opacity: 0.4
                }}>© 2020, The Future. All Rights Reserved.</Typography>
            </Grid>
        </Box>
    </Box>
}

export default Footer;