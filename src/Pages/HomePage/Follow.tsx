import { Typography, Grid, Box, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next"
import { ListItem } from "../../components/ListItem"
import { images } from '../../Assets/images'


const Follow = () => {
    const [t] = useTranslation('common', { keyPrefix: 'follow' })
    const theme = useTheme();
    const socials = (t: any) => [{
        title: 'Facebook',
        time: "@Trishita Majumder",
        Icon: "facebook",
        color: "#7877ee",
        backgroundColor: "#efebff",
        link: "https://www.facebook.com/trishita.majumder.562?mibextid=ZbWKwL"
    }, {
        title: "Instagram",
        time: "@__myself_trishita74",
        Icon: "instagram",
        color: "#e22b55",
        backgroundColor: "#faeef6",
        link: "https://instagram.com/__myself_trishita74?igshid=OGQ5ZDc2ODk2ZA=="
    }, {
        title: "LinkedIn",
        time: "@Trishita Majumder",
        Icon: "linkedin",
        color: "#4ac4e3",
        backgroundColor: "#e5f8fd",
        link: "https://www.linkedin.com/in/trishita-majumder-642b6a18b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }, {
        title: "WhatsApp",
        time: "@Trishita Majumder",
        Icon: "whatsapp",
        color: "#25d366",
        backgroundColor: "#25d36630",
        link: "https://wa.me/+917584942147"
    },
    {
        title: "YouTube",
        time: "@trishitamajumder1104",
        Icon: "youtube",
        color: "#ff4081",
        backgroundColor: "#ff408130",
        link: "https://www.youtube.com/@trishitamajumder1104"
    }
    ]
    return (
        <Box marginY={5} display={"flex"} flexDirection={"column"} alignItems={"center"} overflow={"hidden"} position={"relative"} id={'followUs'}>
            <img src={images.SideImg} style={{ position: "absolute", left: 0, bottom: 10, width: "150px", opacity: 0.8, }} />
            <Typography variant="h4" fontWeight={"bold"} sx={{ color: theme.palette.primary.dark }}>{t('title')}</Typography>
            <Grid container marginY={2} justifyContent={"center"} marginX={2}>
                {socials(t).map((item: any, index: number) => <ListItem key={index} item={item} index={index} lg={3} />)}
            </Grid>
        </Box >
    )
}

export default Follow