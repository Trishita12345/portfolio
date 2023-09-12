import { Box, Button, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import { theme } from '../theme';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReorderIcon from '@mui/icons-material/Reorder';

const LogoComponent = () =>
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} pl={2}>
        <img src={images.Logo} width={'50vw'} />
        <Typography color={'#FFFFFF'} variant='h5'>&nbsp;Cropium</Typography>
    </Box>

const NavigationComponent = () => {
    const theme = useTheme();
    const [t] = useTranslation('common', { keyPrefix: 'header' })
    const arr = [
        { name: t('homeText'), element: '', active: true },
        { name: t('aboutText'), element: '' },
        { name: t('blogText'), element: '' },
        { name: t('pagesText'), element: '' },
        { name: t('contactText'), element: '' }
    ];

    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} bgcolor={theme.palette.primary.main}>
            {arr.map((i: any) => (
                <Typography color={'#FFFFFF'}
                    sx={{
                        opacity: i.active ? 1 : 0.4,
                        cursor: 'pointer',
                        ':hover': {
                            opacity: 1
                        }
                    }}>
                    {i.name}
                </Typography>
            ))}
        </Box>)
}

const LanguageComponent = ({ selectedLang, setSelectedLang }: { selectedLang: string, setSelectedLang: any }) => {
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
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={2}>
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
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} py={3}>
            <LogoComponent />
            {!screenSizeDownMd && <NavigationComponent />}
            <Box display={'flex'} alignItems={'center'} gap={2}>
                {!screenSizeDownSm && <LanguageComponent selectedLang={i18n.language} setSelectedLang={i18n.changeLanguage} />}
                <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.light, textTransform: 'capitalize' }}>{t('hireMeText')}</Button>
                {screenSizeDownMd && <IconButton sx={{ color: '#FFFFFF' }} size='large'>
                    <ReorderIcon />
                </IconButton>}
            </Box>
        </Box >
    );
}

export default Header;