import { Grid, Typography } from "@mui/material"

import { motion } from 'framer-motion'
import { MdSchool } from 'react-icons/md'
import { FaDatabase } from 'react-icons/fa'
import { BsCloudsFill } from 'react-icons/bs'
import { GrDeploy } from 'react-icons/gr'
import { PiProjectorScreenChartLight } from 'react-icons/pi'
import { GiServerRack } from 'react-icons/gi'

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
    }
    return null;
}
export const ListItem = ({ item, index }: { item: any, index: number }) => {
    return (
        <Grid item xs={12} sm={5} lg={3} borderRadius={2} paddingLeft={4} margin={2}
            boxShadow={'0 20px 50px rgba(0, 0, 0, 0.07)'} position={"relative"} overflow={"hidden"} sx={{
                ":hover": {
                    bgcolor: item.backgroundColor,
                    "div > div > div:first-child": {
                        bgcolor: "white"
                    }
                },
            }}>
            <motion.div initial={{ x: 50, opacity: 0 }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    transition: {
                        duration: 1
                    }
                }}>
                <Grid container columnSpacing={2} paddingY={2}
                    alignItems={"start"}>
                    <Grid item bgcolor={item.backgroundColor} padding={2} borderRadius={2} >{getIcon(item.Icon, item.color)}</Grid>
                    <Grid item xs={8}>
                        <Typography variant="caption" color={item.color}>{item.time}</Typography>
                        <Typography variant="h6" fontWeight={"semibold"}>{item.title}</Typography>
                        <Typography variant="body2" fontWeight={"semibold"}>{item.subtitle}</Typography>
                    </Grid>
                </Grid>
                <Typography variant="h4" position={"absolute"} bottom={"-10px"} right={"-7px"} color={"#efebff"}>0{index + 1}</Typography>
            </motion.div>
        </Grid>
    )
}