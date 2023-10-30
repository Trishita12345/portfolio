import { Typography, Grid, Box, useTheme } from "@mui/material"
import { AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import { ListItem } from "../../components/ListItem"
import { images } from '../../Assets/images'


const Follow = () => {
    const [t] = useTranslation('common', { keyPrefix: 'follow' })
    const theme = useTheme();
    const socials = (t: any) => [{
        title: 'Facebook',
        time: "@Subhaji02792219",
        Icon: "facebook",
        color: "#7877ee",
        backgroundColor: "#efebff",
        link: "https://www.facebook.com"
    }, {
        title: "Twitter",
        time: "@Subhaji02792219",
        Icon: "twitter",
        color: "#fba920",
        backgroundColor: "#fef2dd",
        link: "https://www.twitter.com"
    }, {
        title: "Instagram",
        time: "@theFuture.com",
        Icon: "instagram",
        color: "#e22b55",
        backgroundColor: "#faeef6",
        link: "https://www.instagram.com"
    }, {
        title: "LinkedIn",
        time: "@theFuture.com",
        Icon: "linkedin",
        color: "#4ac4e3",
        backgroundColor: "#e5f8fd",
        link: "https://www.linkedin.com"
    }, {
        title: "Whatsapp",
        time: "@theFuture.com",
        Icon: "whatsapp",
        color: "#25d366",
        backgroundColor: "#25d36630",
        link: "https://www.linkedin.com"
    }]
    return (
        <Box marginY={5} display={"flex"} flexDirection={"column"} alignItems={"center"} overflow={"hidden"} position={"relative"} id={'followUs'}>
            <img src={images.SideImg} style={{ position: "absolute", left: 0, bottom: 10, width: "150px", opacity: 0.8, }} />
            <Typography variant="h4" fontWeight={"bold"} sx={{ color: theme.palette.primary.dark }}>{t('title')}</Typography>
            <Grid container marginY={2} justifyContent={"center"} marginX={2}>
                <AnimatePresence mode="wait">{socials(t).map((item: any, index: number) => <ListItem key={index} item={item} index={index} lg={3} />)}</AnimatePresence>
            </Grid>
        </Box >
    )
}

export default Follow