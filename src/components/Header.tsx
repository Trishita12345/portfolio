import { Box, Button, Fab, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import { theme } from '../theme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoReorderFour } from 'react-icons/io5';
import { motion } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { PiSuitcaseSimpleLight } from 'react-icons/pi';
import { NavigationComponent } from './NavigationComponent';

export const LogoComponent = () => {
    const navigate = useNavigate();
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={images.MyLogo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </Box>)
}



const LanguageComponent = () => {
    const theme = useTheme();
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
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2} bgcolor={theme.palette.primary.main} px={1}>
            <Typography sx={i18n.language === 'en' ? langStyleSelected : langStyleNotSelected} onClick={() => i18n.changeLanguage('en')}>
                En
            </Typography>
            <Typography sx={i18n.language === 'fr' ? langStyleSelected : langStyleNotSelected} onClick={() => i18n.changeLanguage('fr')}>
                Fr
            </Typography>
        </Box>)
}


const Header = () => {
    const theme = useTheme();
    const [t] = useTranslation('common', { keyPrefix: 'header' })
    const screenSizeUpLg = useMediaQuery(theme.breakpoints.up('lg'))
    const screenSizeUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const screenSizeDown500 = useMediaQuery(theme.breakpoints.down(500))


    const getPaddingX = () => {
        if (screenSizeUpLg) return 10;
        else if (screenSizeUpMd && !screenSizeUpLg) return 5
    }

    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={3}
            px={getPaddingX()}
            sx={{
                backgroundImage: `url(${images.BackgroundImage})`
            }}>
            <LogoComponent />
            {!screenSizeDownMd && <NavigationComponent />}
            <Box display={'flex'} alignItems={'center'} gap={2}>
                {!screenSizeDownSm && <LanguageComponent />}
                {!screenSizeDown500
                    ? <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.light, textTransform: 'capitalize' }}>{t('hireMeText')}</Button>
                    : <Fab sx={{ position: "fixed", bottom: 30, right: 30, backgroundColor: "#fba920", color: "black" }}>
                        <PiSuitcaseSimpleLight size={"20px"} />
                    </Fab>
                }
                {screenSizeDownMd && <IconButton sx={{ color: '#FFFFFF' }} size='large'>
                    <IoReorderFour />
                </IconButton>}
            </Box>
        </Box >
    );
}

export default Header;