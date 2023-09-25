import { Box, Fab, Grid, IconButton, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { images } from "../../Assets/images";
import { motion, useAnimate } from 'framer-motion'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { ProjectItems } from "../../components/ProjectItems";
import { projectData } from "../../projectData";

const projectIndexes = [0, 1, 4]

const TopProjects = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const screenSizeDownLg = useMediaQuery(theme.breakpoints.down('lg'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'projects' })

    const projects = projectData(t).projects

    return (
        <Box id='projects'
            bgcolor={'#F3F7FF'}
            py={8} px={4}
        >
            <Typography textAlign={'center'} variant={screenSizeDownSm ? "h4" : "h3"} mb={6} color={theme.palette.primary.dark} fontWeight={600}>
                {t('ourTopProjects')}
            </Typography>
            <ProjectItems data={projectIndexes.map((i: any) => projects[i])} />
            <Link onClick={() => navigate('/all-projects')} color={'secondary'}>
                <Typography
                    sx={{
                        textAlign: 'center',
                        mt: '40px',
                        cursor: 'pointer'
                    }}
                >
                    {t('seeAllProjects')}
                </Typography>
            </Link>
        </Box >
    )
}

export default TopProjects;