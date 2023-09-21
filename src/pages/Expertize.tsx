import { Box, Divider, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { images } from "../Assets/images";
import { FaReact } from 'react-icons/fa'
import { SiMui, SiRedux, SiVisualstudio, SiNodemon, SiFirebase } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { BsDatabaseAdd } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from "react";

const Expertize = () => {
    const theme = useTheme();
    const screenSizeUpLg = useMediaQuery(theme.breakpoints.up('lg'))
    const screenSizeUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [width, setWidth] = useState<any>(0);
    const carousel = useRef() as any;

    const [t] = useTranslation('common', { keyPrefix: 'expertize' })

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    const getPaddingX = () => {
        if (screenSizeUpLg) return 20;
        else if (screenSizeUpMd) return 12;
        else if (screenSizeDownSm) return 3;
        else if (screenSizeDownMd) return 9;
    }

    const expArray = [
        { icon: <FaReact style={{ fontSize: '70px' }} />, label: 'React JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <SiMui style={{ fontSize: '70px' }} />, label: 'Material UI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <SiVisualstudio style={{ fontSize: '70px' }} />, label: 'Visual Studio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <SiRedux style={{ fontSize: '70px' }} />, label: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <BiLogoSpringBoot style={{ fontSize: '70px' }} />, label: 'Spring Boot', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <SiNodemon style={{ fontSize: '70px' }} />, label: 'Node JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <SiFirebase style={{ fontSize: '70px' }} />, label: 'Firebase', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' },
        { icon: <BsDatabaseAdd style={{ fontSize: '70px' }} />, label: 'MySQL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'https://meetflo.zendesk.com/hc/en-us/articles/230425728-Privacy-Policies' }
    ]

    return (
        <Box sx={{ backgroundColor: '#27272D', py: 8, position: 'relative', overflow: 'hidden' }}>
            {!screenSizeDownSm &&
                <img src={images.Rectangle42} style={{ position: 'absolute', top: 0, right: 0 }} />
            }
            <Box width={screenSizeDownMd ? screenSizeDownSm ? '90%' : '75%' : '50%'} sx={{ px: getPaddingX() }}>
                <Typography color={'white'} variant="h4" fontWeight={600}>{t('header')}</Typography>
                <Typography color={'white'} fontSize={'12px'} mt={4} mb={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.
                </Typography>
            </Box>
            {screenSizeUpMd && <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Divider sx={{ border: '1px solid #313137', width: '50%' }} />
            </Box>}
            <Box sx={{ px: getPaddingX(), pt: 8 }}>
                <motion.div ref={carousel} >
                    <motion.div
                        // animate='linear infinite'
                        drag='x'
                        dragConstraints={{ right: 0, left: -width }}
                        // animation= move 30s linear infinite
                        initial={{ x: 200 }}
                        whileInView={{
                            x: [0, 0, -250, -250, -500, -500, -750, -750, -1000, -1000, -1250, -1250, -1500, -1500, -1750, -1750, -2000, -2000],
                        }}
                        transition={{
                            x: {
                                duration: 15,
                                ease: "easeIn",
                                repeat: Infinity,
                            },

                            // repeatDelay: 1
                        }}
                        style={{ display: 'flex', gap: 2 }}>
                        {expArray.map((item: any) => (
                            <motion.div>
                                <Box sx={{
                                    minWidth: '250px',
                                    px: 2,
                                    py: 4,
                                    ':hover': {
                                        backgroundColor: '#E22A55',
                                        cursor: 'pointer'
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: 'white',
                                    gap: 4,
                                }}>
                                    {item.icon}
                                    <Typography variant="h5" fontWeight={600}>{item.label}</Typography>
                                    <Typography textAlign={'center'}>{item.description}</Typography>
                                    <Link href={item.url} target="_blank" underline="none">
                                        <Typography sx={{ color: 'white' }}>Read More</Typography>
                                    </Link>
                                </Box>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </Box>

        </Box >
    )
}

export default Expertize;