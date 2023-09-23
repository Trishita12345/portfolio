import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import { theme } from '../theme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoReorderFour } from 'react-icons/io5';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const LogoComponent = () => {
    const navigate = useNavigate();
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <img src={images.MyLogo} onClick={() => navigate('/')} style={{ cursor: 'pointer' }} />
        </Box>)
}

const NavigationComponent = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const [active, setActive] = useState<number>(0)
    const [t] = useTranslation('common', { keyPrefix: 'header' })
    const arr = [
        { name: t('homeText'), element: '', navigateURL: '/', value: 0 },
        { name: t('aboutText'), element: '', navigateURL: '/about', value: 1 },
        { name: t('blogText'), element: '', navigateURL: '/', value: 2 },
        { name: t('projectsText'), element: '', navigateURL: '/', value: 3 },
        { name: t('contactText'), element: '', navigateURL: '/contact-us', value: 4 }
    ];

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} bgcolor={theme.palette.primary.main}>
            {arr.map((i: any, idx: number) => (
                <motion.div whileHover={{ scale: 1.1 }}>
                    <Typography color={'#FFFFFF'}
                        onClick={() => {
                            setActive(idx)
                            navigate(i.navigateURL)
                        }
                        }
                        sx={{
                            opacity: active === idx ? 1 : 0.4,
                            cursor: 'pointer',
                            ':hover': {
                                opacity: 1
                            }
                        }}>
                        {i.name}
                    </Typography>
                </motion.div>
            ))}
        </Box>)
}

const LanguageComponent = ({ selectedLang, setSelectedLang }: { selectedLang: string, setSelectedLang: any }) => {
    const theme = useTheme();
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
            <Typography sx={selectedLang === 'en' ? langStyleSelected : langStyleNotSelected} onClick={() => setSelectedLang('en')}>
                En
            </Typography>
            <Typography sx={selectedLang === 'fr' ? langStyleSelected : langStyleNotSelected} onClick={() => setSelectedLang('fr')}>
                Fr
            </Typography>
        </Box>)
}


const Header = () => {
    const theme = useTheme();
    const [selectedLang, setSelectedLang] = useState<string>('en');
    const [t, i18n] = useTranslation('common', { keyPrefix: 'header' })
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
                {!screenSizeDownSm && <LanguageComponent selectedLang={i18n.language} setSelectedLang={i18n.changeLanguage} />}
                {!screenSizeDown500 && <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.light, textTransform: 'capitalize' }}>{t('hireMeText')}</Button>}
                {screenSizeDownMd && <IconButton sx={{ color: '#FFFFFF' }} size='large'>
                    <IoReorderFour />
                </IconButton>}
            </Box>
        </Box >
    );
}

export default Header;