import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material"

import { MdSchool } from 'react-icons/md'
import { FaDatabase, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { BsCloudsFill } from 'react-icons/bs'
import { GrDeploy } from 'react-icons/gr'
import { PiProjectorScreenChartLight } from 'react-icons/pi'
import { GiServerRack } from 'react-icons/gi'
import { FadeInGrid } from "./FadeInGrid"

const getIcon = (Icon: string, color: string): React.ReactNode => {
    switch (Icon) {
        case "school":
            return <MdSchool style={{ color: color, fontSize: "30px" }} />
        case "frontend":
            return <PiProjectorScreenChartLight style={{ color: color, fontSize: "30px" }} />
        case "backend":
            return <GiServerRack style={{ color: color, fontSize: "30px" }} />
        case "database":
            return <FaDatabase style={{ color: color, fontSize: "30px" }} />
        case "cloud":
            return <BsCloudsFill style={{ color: color, fontSize: "30px" }} />
        case "devops":
            return <GrDeploy style={{ color: color, fontSize: "30px" }} />
        case "facebook":
            return <FaFacebookF style={{ color: color, fontSize: "30px" }} />
        case "twitter":
            return <FaTwitter style={{ color: color, fontSize: "30px" }} />
        case "instagram":
            return <FaInstagram style={{ color: color, fontSize: "30px" }} />
        case "linkedin":
            return <FaLinkedinIn style={{ color: color, fontSize: "30px" }} />
    }
    return null;
}



export const ListItem = ({ item, index, lg = 3 }: { item: any, index: number, lg?: number }) => {
    const theme = useTheme();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    return (
        <FadeInGrid item xs={12} sm={5} lg={lg} borderRadius={2} paddingLeft={4} margin={2} onClick={() => item.link && window.location.assign(item.link)}
            boxShadow={'0 20px 50px rgba(0, 0, 0, 0.07)'} position={"relative"} overflow={"hidden"} sx={{
                ":hover": {
                    bgcolor: item.backgroundColor,
                    "div  > div:first-child": {
                        bgcolor: "white"
                    },
                    cursor: item.link && 'pointer'

                },
            }}
            initial={{ x: 30, opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: "easeIn",
                    delay: screenSizeDownMd ? 0 : index * .3
                }
            }}
        >
            <Grid container columnSpacing={2} paddingY={2}
                alignItems={"start"}>
                <Grid item bgcolor={item.backgroundColor} padding={2} borderRadius={2} >{getIcon(item.Icon, item.color)}</Grid>
                <Grid item xs={8}>
                    {item.time && <Typography variant="caption" color={item.color}>{item.time}</Typography>}
                    {item.title && <Typography variant="h6" fontWeight={"semibold"}>{item.title}</Typography>}
                    {item.subtitle && <Typography variant="body2" fontWeight={"semibold"}>{item.subtitle}</Typography>}
                </Grid>
            </Grid>
            <Typography variant="h4" position={"absolute"} bottom={"-10px"} right={"-7px"} color={"#efebff"}>0{index + 1}</Typography>
        </FadeInGrid>
    )
}