import { Box, Grid, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material"
import { useTranslation } from "react-i18next";
import { theme } from "../../../theme";
import { MdDrafts } from "react-icons/md";
import { FaBuilding } from "react-icons/fa"
import { images } from "../../../Assets/images";

const LeftSection = () => {
    const theme = useTheme();
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'contactUs' })

    return (
        <>
            {/* <Typography fontWeight={'bold'} fontSize={'18px'}>{t('contactus')}</Typography> */}
            <Typography fontWeight={'bold'} fontSize={screenSizeDownSm ? '26px' : '35px'}>
                {t('header1')} < br /> {t('header2')}
            </Typography>
            <Box display='flex' alignItems={'center'} mt={5}>
                <IconButton sx={{ borderRadius: '50%', backgroundColor: theme.palette.secondary.light, height: '50px', width: '50px' }}>
                    <MdDrafts color={theme.palette.secondary.main} />
                </IconButton>
                <Typography fontWeight={'bold'} variant="h5">&nbsp; &nbsp;{t('contactus')}</Typography>
            </Box>
            <Typography mt={2} ml={1} fontWeight={500}>
                {t('phone')} : +91-75849-42147
            </Typography>
            <Typography ml={1} fontWeight={500}>
                {t('email')} : trishita.majumdmer@gmail.com
            </Typography>
            <Box display='flex' alignItems={'center'} mt={5}>
                <IconButton sx={{ borderRadius: '50%', backgroundColor: "#fef2dd", height: '50px', width: '50px' }}>
                    <FaBuilding color={'#fba920'} />
                </IconButton>
                <Typography fontWeight={'bold'} variant="h5">&nbsp; &nbsp;{t('address')}</Typography>
            </Box>
            <Typography mt={2} ml={1} fontWeight={500}>
                {t('addressValue')}
            </Typography>
        </>
    )
}

export default LeftSection;