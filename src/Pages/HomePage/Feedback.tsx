import { Box, Rating, Typography, useMediaQuery, useTheme } from "@mui/material";
import { images } from "../../Assets/images";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

const Feedback = () => {
    const theme = useTheme();
    const screenSizeDownMd = useMediaQuery(theme.breakpoints.down('md'))
    const screenSizeDownSm = useMediaQuery(theme.breakpoints.down('sm'))
    const [t] = useTranslation('common', { keyPrefix: 'feedback' })

    const data = [
        {
            image: images.myImage,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.',
            name: 'John Doe',
            designation: 'CEO Google',
            ratingValue: 5
        },
        {
            image: images.myImage,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.',
            name: 'John Doe',
            designation: 'CEO Google',
            ratingValue: 4
        },
        {
            image: images.myImage,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.',
            name: 'John Doe',
            designation: 'CEO Google',
            ratingValue: 4.5
        },
        {
            image: images.myImage,
            reviewText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mollis leo est, ac suscipit quam pellentesque nec. Fusce tempor elit lectus, vitae pretium libero feugiat vitae. Sed eget purus nisi.',
            name: 'John Doe',
            designation: 'CEO Google',
            ratingValue: 5
        }
    ]

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1200 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1200, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
    };

    return (
        <Box
            sx={{
                backgroundImage: `url(${images.BackgroundImage})`, position: 'relative',
                overflow: 'clip',
                // height: '500px'
            }}
            px={screenSizeDownMd ? screenSizeDownSm ? 0 : 4 : 10}
            py={8}
        >
            <Typography textAlign={'center'} variant={screenSizeDownSm ? "h4" : "h3"} mb={2} color={'white'} fontWeight={'bold'}>{t('title')}</Typography>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1800}
                keyBoardControl={false}
                customTransition="all .5"
                transitionDuration={600}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "desktop2"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            >
                {data.map((item: any, index: number) => (
                    <Box margin={4}>
                        <Box sx={{
                            px: 2,
                            py: 4,
                            display: 'flex',
                            flexDirection: screenSizeDownSm ? "column" : "row",
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            color: 'white',
                            gap: 4,
                            backgroundColor: "white"
                        }}>
                            <Box bgcolor={'lightgrey'} px={1} pt={1} borderRadius={'20px 0px'}>
                                <img src={item.image} height={'80px'} />
                            </Box>
                            <Box>
                                <Typography color={theme.palette.primary.dark} fontSize={'13px'}>{item.reviewText}</Typography>
                                <Box display={'flex'} flexDirection={screenSizeDownSm ? 'column' : 'row'}
                                    alignItems={screenSizeDownSm ? 'start' : 'center'} justifyContent='space-between' mt={1}>
                                    <Typography color={theme.palette.primary.light}>{item.name}</Typography>
                                    <Typography color={theme.palette.primary.dark} fontSize={'13px'}>{item.designation}</Typography>
                                    <Rating name="read-only" value={item.ratingValue} precision={0.5} readOnly />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                ))
                }
            </Carousel >
        </Box >
    )
}

export default Feedback;