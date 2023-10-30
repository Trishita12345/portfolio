import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

export const NavigationComponent = ({ backgroundColor, color }: { backgroundColor?: any, color?: any }) => {
    const location = useLocation();
    const theme = useTheme();
    const [t] = useTranslation('common', { keyPrefix: 'header' })
    const navigate = useNavigate();
    const arr = [
        {
            name: t('homeText'),
            handleClick: () => window.scrollTo({ top: 0, behavior: "smooth" })
        },
        {
            name: t('aboutText'),
            handleClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('skillsText'),
            handleClick: () => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('projectsText'),
            handleClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
        },
        {
            name: t('contactText'),
            handleClick: () => document.getElementById('contactUs')?.scrollIntoView({ behavior: 'smooth' })
        },
    ];

    return (
        <>

            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={3} bgcolor={backgroundColor || theme.palette.primary.main} >
                {
                    location.pathname === '/' ? arr.map((i: any, idx: number) => (
                        <motion.div whileHover={{ scale: 1.1 }}>
                            <Typography color={color || '#FFFFFF'}
                                onClick={i.handleClick}
                                sx={{
                                    opacity: 0.4,
                                    cursor: 'pointer',
                                    ':hover': {
                                        opacity: 1
                                    }
                                }}>
                                {i.name}
                            </Typography>
                        </motion.div>
                    ))
                        : <motion.div whileHover={{ scale: 1.1 }}>
                            <Typography color={'#FFFFFF'}
                                onClick={() => navigate('/')}
                                sx={{
                                    zIndex: 10,
                                    opacity: 0.4,
                                    cursor: 'pointer',
                                    ':hover': {
                                        opacity: 1
                                    }
                                }}>
                                {t('backtoHome')}
                            </Typography>
                        </motion.div>
                }
            </Box >

        </>)
}