import { Box, Button, Grid, IconButton, Link, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { images } from '../../Assets/images';
import { useTranslation } from 'react-i18next';
import { MdDrafts } from 'react-icons/md'
import { motion } from "framer-motion"
import './styling.css';
import { ReactNode, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import Trishita_CV from '../../Assets/pdf/Trishita.pdf'
import Subhajit_CV from '../../Assets/pdf/Subhajit.pdf'

const About = () => {
    const theme = useTheme();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'about' })
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>

            <Box id='about'
                sx={{
                    overflow: 'hidden',
                    backgroundImage: `url(${images.BackgroundSection2})`,
                    // backgroundColor: '#ffffea',
                    [theme.breakpoints.down(600)]: {
                        px: 2
                    },
                }}
                px={screenSizeDownMd ? 5 : 20}
                py={8}
            >
                <Grid container spacing={8}>
                    <Grid item xs={12} md={6}>

                        <FadeIn>
                            <Box display={'flex'} flexDirection={'column'} gap={4} sx={{
                                [theme.breakpoints.down('sm')]: {
                                    alignItems: "center"
                                }
                            }}>

                                <Typography sx={{ color: theme.palette.primary.dark }} variant='h4' fontWeight={'bold'}>
                                    {t('header1')}
                                </Typography>

                                <Box display={'flex'} gap={1} alignItems='center'>

                                    <IconButton sx={{ borderRadius: '50%', backgroundColor: theme.palette.secondary.light, height: '30px', width: '30px' }}>
                                        <MdDrafts color='secondary' style={{ fontSize: '16px' }} />
                                    </IconButton>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold' }} color="secondary"><u>psubhajit14@gmail.com</u></Typography>

                                </Box>
                                <Grid container gap={3} sx={{ [theme.breakpoints.down('sm')]: { flexDirection: "column", justifyContent: "center", alignItems: "center" } }}>
                                    <Grid item xs={6}>
                                        <Box display={'flex'} gap={1} alignItems='center'>
                                            <Typography variant='h3' fontWeight={'bold'} sx={{ color: theme.palette.primary.light }}>3+</Typography>
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
                                <Typography sx={{ color: theme.palette.primary.dark }} variant='h4' fontWeight={'bold'}>
                                    {t('header2')}{t('header3')}
                                </Typography>
                                <Typography fontSize={'12px'}>{t('aboutText')}</Typography>
                                <Button variant="contained" sx={{
                                    backgroundColor: theme.palette.primary.light, textTransform: 'capitalize', width: 'max-content', [theme.breakpoints.down('sm')]: {
                                        alignSelf: "center"
                                    }
                                }} onClick={handleClick}>{t('downloadCvText')}</Button>
                            </Box>
                        </FadeIn>
                    </Grid>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                        sx={{
                            'li > a': {
                                minWidth: "200px",
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: '100%',
                                ":hover": {
                                    color: theme.palette.secondary.main
                                }
                            }
                        }}>
                        <MenuItem onClick={handleClose}>
                            <Link href={Subhajit_CV} download={"Subhajit_paul_theFuture.pdf"} >
                                Subhait Paul<BiDownload />
                            </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Link href={Trishita_CV} download={"Trishita_majumder_theFuture.pdf"}>
                                Trishita Majumder<BiDownload />
                            </Link>
                        </MenuItem>
                    </Menu>
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