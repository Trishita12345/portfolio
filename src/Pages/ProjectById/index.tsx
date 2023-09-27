import { Box, Fab, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { projectData } from "../../data/projectData";
import { motion, useAnimate } from 'framer-motion'
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";

const data = {}

const ProjectById = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const { id } = useParams();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'projects' })
    const [scope, animate] = useAnimate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    const data = projectData(t).projects.find((i: any) => i.id === id)

    const textStyle = {
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }
    }
    const headerStyle = {
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        }
    }

    return (
        <Box>
            {screenSizeDownMd && <Box mt={screenSizeDownSm ? 2 : 4} ml={4} color={theme.palette.primary.dark} display={'flex'} gap={1} alignItems={'center'}
                sx={{
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}>
                <BiArrowBack />
                <Typography>{t('backHome')}</Typography>
            </Box>
            }
            {data &&
                <Grid container py={screenSizeDownMd ? 2 : 8} px={screenSizeDownMd ? screenSizeDownSm ? 2 : 8 : 20} columnSpacing={6} rowSpacing={4} alignItems={'center'}>
                    <Grid item xs={12} lg={6}>
                        <motion.div
                            onMouseOver={() => animate(".MuiButtonBase-root", { top: '40%', left: '40%', translate: "-50%, -50%", opacity: 1 }, { duration: 0.5 })}
                            onMouseLeave={() => animate(".MuiButtonBase-root", { left: '-10%', translate: "0, 0", opacity: 0 }, { duration: 0.5 })}
                            style={{ position: 'relative' }} ref={scope}
                        >
                            <a href={data.websiteUrl} target="_blank">
                                <Fab size="large"
                                    sx={{
                                        position: "absolute",
                                        top: '40%',
                                        opacity: 0,
                                        backgroundColor: theme.palette.secondary.main,
                                        color: "white",
                                        ':hover': {
                                            backgroundColor: '#BB2548'
                                        },
                                    }}>
                                    <BsArrowRight fontSize={'20px'} />
                                </Fab>
                                <img src={data.imgSrc} width={'100%'} />
                            </a>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Typography variant={screenSizeDownSm ? "h5" : "h4"} fontWeight={'bold'} color={theme.palette.primary.dark}>{data.name}</Typography>
                        <Typography color={theme.palette.primary.dark} mt={2} fontSize={screenSizeDownSm ? '12px' : '14px'}>{data.description}</Typography>
                        <Grid container mt={2} color={theme.palette.primary.dark} fontSize={'14px'}>
                            <Grid item xs={5} sm={3}>
                                <Typography sx={headerStyle}>{t('domain')}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Typography>:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={textStyle}>{data.domain}</Typography>
                            </Grid>
                        </Grid>
                        {data.clientName &&
                            <Grid container mt={1} color={theme.palette.primary.dark} fontSize={'14px'}>
                                <Grid item xs={5} sm={3}>
                                    <Typography sx={headerStyle}>{t('clientName')}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={textStyle}>{data.clientName}</Typography>
                                </Grid>
                            </Grid>
                        }
                        {data.githubLink &&
                            <Grid container mt={1} color={theme.palette.primary.dark} fontSize={'14px'}>
                                <Grid item xs={5} sm={3}>
                                    <Typography sx={headerStyle}>{t('githubLink')}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href={data.githubLink} target="_blank">
                                        <Typography sx={textStyle}>{data.githubLink}</Typography>
                                    </a>
                                </Grid>
                            </Grid>
                        }
                        {data.websiteUrl &&
                            <Grid container mt={1} color={theme.palette.primary.dark} fontSize={'14px'}>
                                <Grid item xs={5} sm={3}>
                                    <Typography sx={headerStyle}>{t('websiteUrl')}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <a href={data.websiteUrl} target="_blank">
                                        <Typography sx={textStyle}>{data.websiteUrl}</Typography>
                                    </a>
                                </Grid>
                            </Grid>
                        }
                        {data.finishDate &&
                            <Grid container mt={1} color={theme.palette.primary.dark} fontSize={'14px'}>
                                <Grid item xs={5} sm={3}>
                                    <Typography sx={headerStyle}>{t('finishDate')}</Typography>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography sx={textStyle}>{data.finishDate}</Typography>
                                </Grid>
                            </Grid>
                        }
                    </Grid>
                </Grid>}
        </Box >

    )
}

export default ProjectById;