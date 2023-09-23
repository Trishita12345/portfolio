import { Box, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import React from "react";
import { ListItem, } from "../components/ListItem";
import { Progress } from "../components/Progress";

const Skills: React.FC<any> = () => {
    const [t] = useTranslation('common', { keyPrefix: 'skills' })

    const experience = (t: any) => [{
        title: 'B.Tech in CSE',
        subtitle: "B P Poddar Institute of Management and Technology",
        time: "2016-2020",
        Icon: "school",
        color: "#7877ee",
        backgroundColor: "#efebff",
    }, {
        title: t('frontend'),
        subtitle: "React Js, HTML, CSS, Figma UI/UX",
        time: "2020-Present",
        Icon: "frontend",
        color: "#fba920",
        backgroundColor: "#fef2dd"
    }, {
        title: t('backend'),
        subtitle: "Node Js, Spring Boot, Payment API Integration",
        time: "2020-Present",
        Icon: "backend",
        color: "#e22b55",
        backgroundColor: "#faeef6"
    }, {
        title: t('database'),
        subtitle: "MySQL, PostgreSQL, Oracle DB",
        time: "2020-Present",
        Icon: "database",
        color: "#4ac4e3",
        backgroundColor: "#e5f8fd"
    }, {
        title: 'Cloud',
        subtitle: "Firebase Cloudstore, Authentication, Authorization",
        time: "2020-Present",
        Icon: "cloud",
        color: "#8bc240",
        backgroundColor: "#e0fcdb"
    }, {
        title: 'DevOps',
        subtitle: "GitHub, Vercel",
        time: "2020-Present",
        Icon: "devops",
        color: "#7877ee",
        backgroundColor: "#efebff"
    }]

    const skills = [{
        title: "Web Design",
        value: 90,
        color: "#7877ee",
    },
    {
        title: "Frontend Development",
        value: 80,
        color: "#fba920",
    },
    {
        title: "Backend Development",
        value: 85,
        color: "#8bc240",
    }, {
        title: "Cloud",
        value: 80,
        color: "#4ac4e3",
    }, {
        title: "Mobile",
        value: 85,
        color: "#e22b55",
    }
    ]


    return (
        <Box marginY={5} display={"flex"} flexDirection={"column"} alignItems={"center"} overflow={"hidden"}>
            <Typography variant="h4" fontWeight={"bold"}>{t('title')}</Typography>
            <Grid container marginY={2} justifyContent={"center"} marginX={2}>
                {experience(t).map((item: any, index: number) => <ListItem key={index} item={item} index={index} />)}
            </Grid>
            <Grid container justifyContent={"center"} alignItems={"center"}>
                {skills.map((item: any) => <Progress item={item} />)}
            </Grid>
        </Box >
    )
}
export default Skills;