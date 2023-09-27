import { AppBar, Box, Fab, Grid, IconButton, Tab, Tabs, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { ProjectItems } from "../../components/ProjectItems";
import { projectData } from "../../data/projectData";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const AllProjects = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const screenSizeDownLg = useMediaQuery(theme.breakpoints.down('lg'))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'projects' })
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [])

    function a11yProps(index: number) {
        return {
            id: `full-width-tab-${index}`,
            "aria-controls": `full-width-tabpanel-${index}`
        };
    }

    const data = projectData(t)

    return (
        <>
            {screenSizeDownMd && <Box mt={4} ml={4} color={theme.palette.primary.dark} display={'flex'} gap={1} alignItems={'center'}
                sx={{
                    cursor: 'pointer'
                }}
                onClick={() => navigate('/')}>
                <BiArrowBack />
                <Typography>{t('backHome')}</Typography>
            </Box>
            }
            <Box py={screenSizeDownMd ? 2 : 6} px={4}>
                <Typography textAlign={'center'} variant={screenSizeDownSm ? "h4" : "h3"} mb={6} color={theme.palette.primary.dark} fontWeight={600}>
                    {t('ourProjects')}
                </Typography>
                <Box sx={{ backgroundColor: 'white', color: theme.palette.secondary.main, display: 'flex', justifyContent: 'center' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="scrollable"
                        aria-label="full width tabs example"
                        scrollButtons
                        allowScrollButtonsMobile
                    >
                        <Tab label={t('all')} {...a11yProps(0)} sx={{ textTransform: 'capitalize' }} />
                        {data.domains.map((item: any, idx: number) =>
                            <Tab label={item} {...a11yProps(idx + 1)} sx={{ textTransform: 'capitalize' }} />
                        )}
                    </Tabs>
                </Box>
                <Box py={5}>
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <ProjectItems data={data.projects} />
                    </TabPanel>
                    {data.domains.map((item: any, idx: number) =>
                        <TabPanel value={value} index={idx + 1} dir={theme.direction}>
                            <ProjectItems data={data.projects.filter((item: any) => item.domain === data.domains[value - 1])} />
                        </TabPanel>
                    )}
                </Box>
            </Box >
        </>
    )
}

export default AllProjects;