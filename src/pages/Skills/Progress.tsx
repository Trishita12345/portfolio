import { Box, CircularProgress, Grid, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"



export const Progress = ({ item }: { item: any }) => {
    const ref = useRef() as any;
    const inView = useInView(ref, { once: true })
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (inView && progress < item.value)
                setProgress(progress + 1)
        }, 20)
        return () => {
            clearInterval(timer)
        }
    }, [inView, progress])


    return (
        <Grid item marginX={3} ref={ref}>
            <Box>
                <Box padding={3} width={"100px"} height={"100px"} position={"relative"}>
                    <Typography position={"absolute"} left="50%" top="50%" sx={{ transform: "translate(-50%, -50%)", color: item.color }}>{progress}%</Typography>
                    <CircularProgress size={100} variant="determinate" value={progress} sx={{ color: item.color }} />
                </Box>
                <Typography textAlign={"center"}>{item.title}</Typography>
            </Box>
        </Grid>
    )
}