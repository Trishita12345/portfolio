import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import Header from './Header';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const theme = useTheme();
    const screenSizeDown1000px = useMediaQuery(theme.breakpoints.down(1000))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const socialIconStyle = {
        fontSize: '18px',
        color: theme.palette.primary.light,
        ':hover': {
            cursor: 'pointer',
            color: '#FFFFFF'
        }
    }
    const [t] = useTranslation('common', { keyPrefix: 'home' })
    return (
        <>
            <Box height={screenSizeDownMd ? screenSizeDownSm ? '862px' : '905px' : '550px'}
                sx={{
                    backgroundImage: `url(${images.BackgroundImage})`, position: 'relative',
                    [theme.breakpoints.down(600)]: {
                        px: 1
                    }
                }}
                pl={screenSizeDown1000px ? 5 : 10} pr={screenSizeDown1000px ? 8 : 15}
            >
                <Header />
                <img src={images.CrossIcon} width={'100vw'} style={{ position: 'absolute', top: 80, left: 30 }} />
                <img src={images.CornerImage} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 200 }} />
                <Box style={{ position: 'absolute', top: 250, left: 50 }} display={'flex'} flexDirection={'column'} gap={2}>
                    <FacebookIcon sx={{ ...socialIconStyle, color: '#FFFFFF' }} />
                    <GitHubIcon sx={socialIconStyle} />
                    <LinkedInIcon sx={socialIconStyle} />
                    <InstagramIcon sx={socialIconStyle} />
                </Box>
                <Box display={'flex'} flexDirection={screenSizeDownMd ? 'column' : 'row'} justifyContent={screenSizeDownMd ? 'center' : 'space-between'}>
                    <Box display={'flex'} flexDirection={'column'} pl={8} pt={10} alignItems={screenSizeDownMd ? 'center' : 'start'}>
                        <Typography color={'#FFFFFF'} variant={screenSizeDownSm ? 'h4' : 'h3'} fontWeight={600} whiteSpace={screenSizeDownSm ? 'normal' : 'nowrap'} textAlign={screenSizeDownMd ? 'center' : 'start'}>
                            {t('heading1')} <br /> Subhajit Paul <br /> {t('heading2')}
                        </Typography>
                        <Box display={'flex'} gap={2} mt={screenSizeDownMd ? 2 : 6} mb={6}>
                            <Button color='secondary' sx={{ textTransform: 'capitalize' }} variant='contained'>{t('getInTouchText')}</Button>
                            <Button color='secondary' sx={{ textTransform: 'capitalize' }} variant='contained'>{t('projectViewText')}</Button>
                        </Box>
                    </Box>
                    <img src={images.myImage} style={{ zIndex: 10000, width: 'fit-content', placeSelf: "center" }} height={'460px'} />
                </Box >
            </Box>
        </>
    );
}

export default Home;