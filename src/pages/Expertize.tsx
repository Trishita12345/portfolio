import { Box, Divider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { images } from "../Assets/images";
import { FaReact } from 'react-icons/fa'
import { SiMui, SiRedux, SiVisualstudio, SiNodemon, SiFirebase } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { BsDatabaseAdd } from 'react-icons/bs'

const Expertize = () => {
    const theme = useTheme();
    const screenSizeUpMd = useMediaQuery(theme.breakpoints.up('md'))
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))

    const [t] = useTranslation('common', { keyPrefix: 'expertize' })

    const getPaddingX = () => {
        if (screenSizeUpMd) return 12;
        else if (screenSizeDownSm) return 3;
        else if (screenSizeDownMd) return 9;
    }

    const expArray = [
        { icon: <FaReact />, label: 'React JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <SiMui />, label: 'Material UI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <SiVisualstudio />, label: 'Visual Studio', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <SiRedux />, label: 'Redux', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <BiLogoSpringBoot />, label: 'Spring Boot', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <SiNodemon />, label: 'Node JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <SiFirebase />, label: 'Firebase', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' },
        { icon: <BsDatabaseAdd />, label: 'MySQL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', url: 'www.google.com' }
    ]

    return (
        <Box sx={{ backgroundColor: '#27272D', py: 8, position: 'relative' }}>
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
            <Box width={'50%'} sx={{ px: getPaddingX(), py: 8 }}>
                <Typography color={'white'} variant="h4" fontWeight={600}>{t('header')}</Typography>
                <Typography color={'white'} fontSize={'12px'} mt={4}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.
                </Typography>
            </Box>

        </Box >
    )
}

export default Expertize;