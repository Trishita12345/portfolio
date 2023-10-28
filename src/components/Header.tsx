import { Box, Button, Fab, Link, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom'
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { NavigationComponent } from './NavigationComponent';
import FixedBottomNavigation from './BottomNavigation';

export const LogoComponent = () => {
    const navigate = useNavigate();
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={images.FullLogo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </Box>)
}



const LanguageComponent = () => {
    const theme = useTheme();
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t, i18n] = useTranslation('common')
    const langStyleSelected = {
        color: '#FFFFFF',
        cursor: 'pointer',
    }
    const langStyleNotSelected = {
        color: '#FFFFFF',
        opacity: 0.4,
        cursor: 'pointer',
    }

    return (
        <>
            {!screenSizeDownSm ?
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2} bgcolor={theme.palette.primary.main} px={1}>
                    <Typography sx={i18n.language === 'en' ? langStyleSelected : langStyleNotSelected} onClick={() => i18n.changeLanguage('en')}>
                        En
                    </Typography>
                    <Typography sx={i18n.language === 'fr' ? langStyleSelected : langStyleNotSelected} onClick={() => i18n.changeLanguage('fr')}>
                        Fr
                    </Typography>
                </Box>
                :
                <Button variant='contained' sx={{
                    backgroundColor: theme.palette.primary.light,
                    ":focus": {
                        backgroundColor: theme.palette.primary.light,
                    }
                }}
                    onClick={() => i18n.language === 'en' ? i18n.changeLanguage('fr') : i18n.changeLanguage('en')}>
                    {i18n.language}
                </Button>
            }
        </>
    )
}


const Header = () => {
    const theme = useTheme();
    const [t] = useTranslation('common', { keyPrefix: 'header' })
    const screenSizeUpLg = useMediaQuery(theme.breakpoints.up('lg'))
    const screenSizeUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))


    const getPaddingX = () => {
        if (screenSizeUpLg) return 10;
        else if (screenSizeUpMd && !screenSizeUpLg) return 5
        else if (screenSizeDownMd) return 2
    }

    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={3}
            px={getPaddingX()}
            sx={{
                backgroundImage: `url(${images.BackgroundImage})`
            }}>
            <Box bgcolor={theme.palette.primary.main}>
                {/* {!screenSizeDownMd ? <LogoComponent /> : <img src={images.LogoText} />} */}
            </Box>
            {!screenSizeDownMd && <NavigationComponent />}
            <Box display={'flex'} alignItems={'center'} gap={2}>
                <LanguageComponent />
                {!screenSizeDownSm
                    ? <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.light, textTransform: 'capitalize' }}>
                        <Link color={"#ffffff"} sx={{ textDecoration: "none" }} href={images.BackgroundImage} download={"BackgroundImage.svg"}>
                            {t('downloadCvText')}
                        </Link>
                    </Button>
                    : <Fab sx={{ position: "fixed", bottom: 70, right: 30, backgroundColor: theme.palette.secondary.main, color: "white" }}>
                        <Link color={"#ffffff"} sx={{ textDecoration: "none" }} href={images.BackgroundImage} download={"BackgroundImage.svg"}>
                            <PiSuitcaseSimpleLight size={"20px"} />
                        </Link>
                    </Fab>
                }
                {screenSizeDownMd && <FixedBottomNavigation />}
            </Box>
        </Box >
    );
}

export default Header;