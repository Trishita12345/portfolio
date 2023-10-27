import { Box, Fab, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { images } from "../Assets/images"
import { motion, useAnimate } from 'framer-motion'
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProjectItem = ({ item }: { item: any }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [scope, animate] = useAnimate();
    console.log("Item: ", item)
    return (
        <Grid item sx={{ overflow: 'hidden' }}>
            <motion.div
                onMouseOver={() => animate(".MuiButtonBase-root", { top: '40%', left: '40%', translate: "-50%, -50%", opacity: 1 }, { duration: 0.5 })}
                onMouseLeave={() => animate(".MuiButtonBase-root", { left: '-10%', translate: "0, 0", opacity: 0 }, { duration: 0.5 })}
                style={{ position: 'relative' }} ref={scope}
                whileHover={{
                    scale: 1.1,
                    rotate: '5deg',
                    transition: {
                        duration: 0.4,
                        ease: 'easeIn'
                    }
                }}
            >
                <Fab size="medium"
                    sx={{
                        position: "absolute",
                        top: '40%',
                        opacity: 0,
                        backgroundColor: theme.palette.secondary.main,
                        color: "white",
                        ':hover': {
                            backgroundColor: '#BB2548'
                        },
                    }}
                    onClick={() => navigate(`../project/${item.id}`, { replace: true })}>
                    <BsArrowRight />
                </Fab>
                <img src={item.imgSrc} />
            </motion.div>
            <Typography variant="h6" color={theme.palette.primary.dark} mt={1} fontWeight={'bold'}>
                {item.name}
            </Typography>
        </Grid>
    )
}

export const ProjectItems = ({ data }: { data: any }) => {

    return (<Grid container justifyContent={'space-evenly'} alignItems={'center'} rowSpacing={2}>
        {data.map((item: any) => <ProjectItem item={item} />)}
    </Grid>)
}