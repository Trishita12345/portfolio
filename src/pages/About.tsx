import { Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../Assets/images';
import { useTranslation } from 'react-i18next';
import DraftsIcon from '@mui/icons-material/Drafts';
import { motion } from "framer-motion"
import './styling.css';
import { ReactNode } from 'react';

const About = () => {
    const theme = useTheme();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'about' })
    return (
        <>

            <Box
                sx={{
                    // height: '400px',
                    backgroundImage: `url(${images.BackgroundSection2})`,
                    // backgroundColor: '#ffffea',
                    [theme.breakpoints.down(600)]: {
                        px: 2
                    }
                }}
                px={screenSizeDownMd ? 5 : 20}
                py={8}
            >
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>

                        <FadeIn>
                            <Box display={'flex'} flexDirection={'column'} gap={4}>

                                <Typography sx={{ color: theme.palette.primary.dark }} variant='h4' fontWeight={600}>
                                    {t('header1')}
                                </Typography>

                                <Box display={'flex'} gap={1} alignItems='center'>

                                    <IconButton sx={{ borderRadius: '50%', backgroundColor: theme.palette.secondary.light, height: '30px', width: '30px' }}>
                                        <DraftsIcon color='secondary' sx={{ fontSize: '16px' }} />
                                    </IconButton>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 600 }} color="secondary"><u>psubhajit14@gmail.com</u></Typography>

                                </Box>
                                <Grid container gap={3}>
                                    <Grid item xs={3}>
                                        <Box display={'flex'} gap={1} alignItems='center'>
                                            <Typography variant='h3' fontWeight={600} sx={{ color: theme.palette.primary.light }}>3</Typography>
                                            <Typography sx={{ fontSize: '12px' }}>{t('expText')} </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Box display={'flex'} gap={1} alignItems='center'>
                                            <Typography variant='h3' fontWeight={600} sx={{ color: '#FAA314' }}>20+</Typography>
                                            <Typography sx={{ fontSize: '12px' }}>{t('expText')} </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </FadeIn>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <FadeIn direction='right'>
                            <Box display={'flex'} flexDirection={'column'} gap={4}>
                                <Typography sx={{ color: theme.palette.primary.dark }} variant='h4' fontWeight={600}>
                                    {t('header2')}{t('header3')}
                                </Typography>
                                <Typography fontSize={'12px'}>{t('aboutText')}</Typography>
                                <Button variant="contained" sx={{ backgroundColor: theme.palette.primary.light, textTransform: 'capitalize', width: 'max-content' }} >{t('downloadCvText')}</Button>
                            </Box>
                        </FadeIn>
                    </Grid>
                </Grid >
            </Box >

        </>
    );
}

interface FadeInProps { children?: ReactNode; direction?: "left" | "right" };
const FadeIn: React.FC<FadeInProps> = ({ children, direction = 'left' }: FadeInProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === 'left' ? -200 : 200 }}
            whileInView={{
                x: 0, opacity: 1, transition: {
                    duration: 0.6,
                    ease: "easeIn"
                }
            }}>{children}</motion.div>
    )
}

export default About;