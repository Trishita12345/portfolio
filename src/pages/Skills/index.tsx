import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import { ListItem, skills } from "./ListItem";

const Skills: React.FC<any> = () => {
    const theme = useTheme();

    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'skills' })


    return (
        <Box marginY={5} display={"flex"} flexDirection={"column"} alignItems={"center"} >
            <Typography variant="h4" fontWeight={"bold"}>{t('title')}</Typography>
            <Grid container marginY={2} justifyContent={"center"}>{skills(t).map((item: any, index: number) => <ListItem item={item} index={index} />)}</Grid>
        </Box >
    )
}
export default Skills;