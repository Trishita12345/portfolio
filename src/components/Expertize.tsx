import { Box, Divider, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import { images } from "../Assets/images";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { expertizeData } from "../data/expertizeData";

const Expertize = () => {
    const theme = useTheme();
    const screenSizeUp1200 = useMediaQuery(theme.breakpoints.up(1200))
    const screenSizeUp1025 = useMediaQuery(theme.breakpoints.up(1025))
    const screenSizeUp464 = useMediaQuery(theme.breakpoints.up(464))
    const screenSizeDown464 = useMediaQuery(theme.breakpoints.down(464))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [width, setWidth] = useState<any>(0);
    const [selected, setSelected] = useState<any>(0);

    const [t] = useTranslation('common', { keyPrefix: 'expertize' })

    useEffect(() => {
        if (!screenSizeDownSm) {
            setTimeout(() => {
                if (selected < 7) setSelected(selected + 1)
                else setSelected(0)
            }, 1200)
        }

    }, [selected])



    const getPaddingX = () => {
        if (screenSizeUp1025) return 20;
        else if (screenSizeUp464 && !screenSizeUp1025) return 12;
        else if (screenSizeDown464) return 3;
    }

    const expArray = expertizeData(t);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        desktop2: {
            breakpoint: { max: 1200, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
        }
    };

    return (
        <Box sx={{ backgroundColor: '#27272D', py: 8, position: 'relative', overflow: 'hidden' }}>
            {!screenSizeDownSm &&
                <img src={images.Rectangle42} style={{ position: 'absolute', top: 0, right: 0 }} />
            }
            <Box width={!screenSizeUp1025 ? screenSizeDown464 ? '90%' : '75%' : '50%'} sx={{ px: getPaddingX() }}>
                <Typography color={'white'} variant="h4" fontWeight={'bold'}>{t('header')}</Typography>
                <Typography color={'white'} fontSize={'16px'} mt={4} mb={1}>
                    Till now we have worked on lot of frontend and backend technologies. Technologies we have expertize and can provide supports are -
                </Typography>
            </Box>
            {screenSizeUp464 && !screenSizeUp1025 && <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <Divider sx={{ border: '1px solid #313137', width: '50%' }} />
            </Box>}
            <Box sx={{ px: getPaddingX(), pt: 8 }}>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={screenSizeUp1025 ? screenSizeUp1200 ? 4800 : 3600 : 2400}
                    keyBoardControl={false}
                    customTransition="all .5"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop", "desktop2"]}
                    // deviceType={this.props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    {expArray.map((item: any, index: number) => (
                        <Box sx={{
                            minWidth: '200px',
                            minHeight: '400px',
                            px: 2,
                            py: 4,
                            [theme.breakpoints.up(600)]: {
                                backgroundColor: index === selected ? '#E22A55' : 'transparent',
                            },
                            ':hover': {
                                backgroundColor: '#E22A55',
                                cursor: 'pointer'
                            },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',
                            color: 'white',
                            gap: 4,
                        }}>
                            {item.icon}
                            <Typography variant="h5" fontWeight={600}>{item.label}</Typography>
                            <Typography textAlign={'center'} fontSize={'12px'}>{item.description}</Typography>
                            <Link href={item.url} target="_blank" underline="none">
                                <Typography sx={{ color: 'white' }}>Read More</Typography>
                            </Link>
                        </Box>
                        // <div style={{ backgroundColor: 'red' }}>Item 1</div>
                    ))}
                </Carousel>
            </Box >
        </Box >
    )
}

export default Expertize;