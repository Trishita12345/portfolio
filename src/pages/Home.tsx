import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import Header from './Header';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useTranslation } from 'react-i18next';
import './styling.css';

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
            <Box
                sx={{
                    backgroundImage: `url(${images.BackgroundImage})`, position: 'relative',
                    overflow: 'clip',
                    [theme.breakpoints.up('md')]: {
                        height: '800px'
                    }
                }}
                pl={screenSizeDownMd ? 4 : 10} pr={screenSizeDownMd ? 4 : 15}
            >
                <Header />
                <img src={images.CrossIcon} width={'100vw'} style={{ position: 'absolute', top: 80, left: 30, animation: 'rotation 17s linear infinite' }} />
                <img src={images.CornerImage} style={{ position: 'absolute', bottom: 0, right: 0, zIndex: 200 }} />
                <Box style={{
                    position: 'absolute', top: 250, left: 50
                }} display={'flex'} flexDirection={'column'} gap={2}>
                    <FacebookIcon sx={{ ...socialIconStyle, color: '#FFFFFF' }} />
                    <GitHubIcon sx={socialIconStyle} />
                    <LinkedInIcon sx={socialIconStyle} />
                    <InstagramIcon sx={socialIconStyle} />
                </Box>
                <Box display={'flex'} flexDirection={screenSizeDownMd ? 'column' : 'row'} justifyContent={screenSizeDownMd ? 'center' : 'space-between'}>
                    <Box display={'flex'} flexDirection={'column'} pl={8} pt={10} alignItems={screenSizeDownMd ? 'center' : 'start'} flex={7} justifyContent={"center"}>
                        <Typography color={'#FFFFFF'} variant={screenSizeDownSm ? 'h4' : 'h3'} fontWeight={600} whiteSpace={screenSizeDownSm ? 'normal' : 'nowrap'} textAlign={screenSizeDownMd ? 'center' : 'start'}>
                            {t('heading1')} <br /> Subhajit Paul <br /> {t('heading2')}
                        </Typography>
                        <Box display={'flex'} gap={2} mt={screenSizeDownMd ? 2 : 6} mb={6} width={"100%"} justifyContent={screenSizeDownMd ? "center" : "start"}>
                            <Button color='secondary' sx={{ textTransform: 'capitalize' }} variant='contained'>{t('getInTouchText')}</Button>
                            <Button color='secondary' sx={{ textTransform: 'capitalize' }} variant='contained'>{t('projectViewText')}</Button>
                        </Box>
                    </Box>
                    <Box component={'img'} src={images.myImage} sx={{
                        placeSelf: 'center',
                        zIndex: 1000, height: '700px', [theme.breakpoints.down('md')]: {
                            width: '400px',
                            height: '400px'
                        }
                    }} />
                </Box >
            </Box >
        </>
    );
}

export default Home;