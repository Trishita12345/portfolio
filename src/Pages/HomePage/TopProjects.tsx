import { Box, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ProjectItems } from "../../components/ProjectItems";
import { projectData } from "../../data/projectData";

const projectIds = [1]

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
            <Typography textAlign={'center'} variant={screenSizeDownSm ? "h4" : "h3"} mb={6} color={theme.palette.primary.dark} fontWeight={'bold'}>
                {t('ourTopProjects')}
            </Typography>
            <ProjectItems data={projectIds.map((i: any) => projects[i - 1])} />
            {/* <ProjectItems data={projects.filter((i: any) => i.isTopProject)} /> */}
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