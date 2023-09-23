import { Typography, Grid, Box } from "@mui/material"
import { AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ListItem } from "../components/ListItem"


const Follow = () => {
    const [t] = useTranslation('common', { keyPrefix: 'follow' })
    const socials = (t: any) => [{
        title: 'Facebook',
        subtitle: "Our Facebook Profile",
        time: "@Subhaji02792219",
        Icon: "facebook",
        color: "#7877ee",
        backgroundColor: "#efebff",
        link: "https://www.facebook.com"
    }, {
        title: "Twitter",
        time: "@Subhaji02792219",
        subtitle: "Our Twitter Profile",
        Icon: "twitter",
        color: "#fba920",
        backgroundColor: "#fef2dd",
        link: "https://www.twitter.com"
    }, {
        title: "Instagram",
        time: "@theFuture.com",
        subtitle: "Our Instagram Profile",
        Icon: "instagram",
        color: "#e22b55",
        backgroundColor: "#faeef6",
        link: "https://www.instagram.com"
    }, {
        title: "LinkedIn",
        time: "@theFuture.com",
        subtitle: "Our Instagram Profile",
        Icon: "linkedin",
        color: "#4ac4e3",
        backgroundColor: "#e5f8fd",
        link: "https://www.linkedin.com"
    }]
    return (
        <Box marginY={5} display={"flex"} flexDirection={"column"} alignItems={"center"} overflow={"hidden"}>
            <Typography variant="h4" fontWeight={"bold"}>{t('title')}</Typography>
            <Grid container marginY={2} justifyContent={"center"} marginX={2}>
                <AnimatePresence mode="wait">{socials(t).map((item: any, index: number) => <ListItem key={index} item={item} index={index} lg={2.5} />)}</AnimatePresence>
            </Grid>
        </Box >
    )
}

export default Follow